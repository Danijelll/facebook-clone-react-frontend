import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../features/store';
import { closeCommentModal } from '../../features/Ui/UiSlice'
import './CommentModal.scss'
import CommentItem from './Components/CommentItem/CommentItem';


function CommentModal() {
  const albumComments = useSelector((state: RootStore) => state.comment.currentAlbumComments);
  const dispatch = useDispatch();

  const renderComments = () => {
    return albumComments?.map(comment => <CommentItem key={comment.commentId} username={comment.username} profileImage={comment.profileImage} userId={comment.userId} text={comment.text} createdOn={comment.createdOn} />)
  }

  useEffect(() => {
    console.log(albumComments);
  }, [])

  return (
    <div className='comment-modal-background' onClick={() => dispatch(closeCommentModal())}>
      <div id='comment-modal-container' onClick={(e) => e.stopPropagation()}>

        <div id='body'>
          {renderComments()}
        </div>

        <div id='footer'>

        </div>

      </div>
    </div >
  )
}

export default CommentModal