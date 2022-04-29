import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAlbumComments, uploadComment } from '../../features/Comments/CommentSlice';
import { AppDispatch, RootStore } from '../../features/store';
import { closeCommentModal } from '../../features/Ui/UiSlice'
import { ICommentUploadData } from '../../interfaces/IComment';
import './CommentModal.scss'
import CommentItem from './Components/CommentItem/CommentItem';

function CommentModal() {
  const albumComments = useSelector((state: RootStore) => state.comment.currentAlbumComments);
  const currentOpenAlbum = useSelector((state: RootStore) => state.album.currentOpenAlbum);
  const userData = useSelector((state: RootStore) => state.user.currentUser);

  const dispatch: AppDispatch = useDispatch();

  let [page, setPage] = useState<number>(0)
  const [comment, setComment] = useState<ICommentUploadData>({
    albumId: currentOpenAlbum?.id,
    userId: userData?.id,
    text: '',
  })

  let albumCommentPage = {
    albumId: currentOpenAlbum?.id,
    page: page,
  }

  useEffect(() => {
    if (currentOpenAlbum?.id != null) {
      albumCommentPage = {
        albumId: currentOpenAlbum?.id,
        page: page
      }
      dispatch(getAllAlbumComments(albumCommentPage))
      comment.albumId = currentOpenAlbum.id
    }

  }, [currentOpenAlbum, page])


  const handleInput = (field: string, value: string) => {
    setComment({ ...comment, [field]: value });
  }

  const handleUpload = async () => {
    const result = await dispatch(uploadComment(comment));
    const resultData = unwrapResult(result);

    if (resultData) {
      dispatch(getAllAlbumComments(albumCommentPage))
    }
  }

  const renderComments = () => {
    return albumComments?.map(comment =>
      <CommentItem key={comment.createdOn.toString()}
        commentId={comment.commentId}
        username={comment.username}
        profileImage={comment.profileImage}
        text={comment.text}
        createdOn={comment.createdOn}
      />)
  }

  return (
    <div className='comment-modal-background' onClick={() => dispatch(closeCommentModal())}>
      <div id='comment-modal-container' onClick={(e) => e.stopPropagation()}>

        <div id='upload-comment-wrapper'>

          <img id='upload-comment-image' src={userData.profileImage} alt={userData.profileImage} />

          <input onChange={e => handleInput('text', e.target.value)} id='upload-comment-input' type="text" placeholder='Add a comment...' />

          <button onClick={handleUpload} id='upload-comment-button'>Post</button>

          <button onClick={() => setPage(page--)} >Previous Page</button>
          <button onClick={() => setPage(page++)}>Next Page</button>
          <p>Page {page}</p>
        </div>

        <div id='body'>
          {renderComments()}
        </div>

      </div>
    </div >
  )
}

export default CommentModal
