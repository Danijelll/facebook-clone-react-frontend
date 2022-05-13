import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAlbumComments, uploadComment } from '../../features/Comments/CommentSlice';
import { AppDispatch, RootStore } from '../../features/store';
import { toggleCommentModal } from '../../features/Ui/UiSlice'
import { ICommentUploadData } from '../../interfaces/IComment';
import './CommentModal.scss'
import CommentItem from './Components/CommentItem/CommentItem';

function CommentModal() {
  const currentOpenComment = useSelector((state: RootStore) => state.comment.currentOpenComment);
  const albumComments = useSelector((state: RootStore) => state.comment.currentAlbumComments);
  const currentOpenAlbum = useSelector((state: RootStore) => state.album.currentOpenAlbum);
  const userData = useSelector((state: RootStore) => state.user.currentUser);

  const dispatch: AppDispatch = useDispatch();

  let [page, setPage] = useState<number>(1)
  const [comment, setComment] = useState<ICommentUploadData>({
    albumId: currentOpenAlbum?.id,
    userId: userData?.id,
    text: '',
  })

  let albumCommentPage = {
    albumId: currentOpenAlbum?.id,
    page: page,
  }
  let nextAlbumCommentPage = {
    albumId: currentOpenAlbum?.id,
    page: page + 1,
  }

  useEffect(() => {
    if (currentOpenAlbum?.id != null) {
      dispatch(getAllAlbumComments(albumCommentPage))

      comment.albumId = currentOpenAlbum.id
    }

  }, [currentOpenAlbum, page, currentOpenComment])


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

  const handleNextPage = async () => {
    const result = await dispatch(getAllAlbumComments(nextAlbumCommentPage));
    const resultData = unwrapResult(result);
    if (resultData.length) {
      setPage(page + 1)
    }
  }

  const renderComments = () => {
    return albumComments?.map(comment =>
      <CommentItem key={comment.id}
        userId={comment.userId}
        commentId={comment.id}
        username={comment.username}
        profileImage={comment.profileImage}
        text={comment.text}
        createdOn={comment.createdOn}
      />)
  }

  return (
    <div className='comment-modal-background'
      onClick={() => dispatch(toggleCommentModal())}>
      <div id='comment-modal-container'
        onClick={(e) => e.stopPropagation()}>

        <div id='upload-comment-wrapper'>

          <img
            id='upload-comment-image'
            src={userData.profileImage}
            alt={userData.profileImage}
          />

          <input
            onChange={e => handleInput('text', e.target.value)}
            id='upload-comment-input'
            type="text"
            placeholder='Add a comment...'
          />

          <button
            onClick={handleUpload}
            id='upload-comment-button'>
            Post
          </button>

          <button
            id='comment-modal-page-button'
            onClick={() => { if (page > 1) { setPage(page - 1) } }}>
            &lt;
          </button>

          <p id='comment-modal-page-text'>Page {page}</p>

          <button
            id='comment-modal-page-button'
            onClick={() => handleNextPage()}>
            &gt;
          </button>

        </div>

        <div id='comment-modal-body'>
          {renderComments()}
        </div>

      </div>
    </div >
  )
}

export default CommentModal
