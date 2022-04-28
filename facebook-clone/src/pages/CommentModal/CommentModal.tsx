import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../features/store';
import { closeCommentModal } from '../../features/Ui/UiSlice'
import './CommentModal.scss'
import CommentItem from './Components/CommentItem/CommentItem';

function CommentModal() {
  const albumComments = useSelector((state: RootStore) => state.comment.currentAlbumComments);
  const userData = useSelector((state: RootStore) => state.user.currentUser);
  const dispatch = useDispatch();

  const renderComments = () => {
    return albumComments?.map(comment => <CommentItem key={comment.createdOn.toString()} username={comment.username} profileImage={comment.profileImage} userId={comment.userId} text={comment.text} createdOn={comment.createdOn} />)
  }

  return (
    <div className='comment-modal-background' onClick={() => dispatch(closeCommentModal())}>
      <div id='comment-modal-container' onClick={(e) => e.stopPropagation()}>

        <div id='upload-comment-wrapper'>

          <img id='upload-comment-image' src={userData.profileImage} alt={userData.profileImage} />

        <input id='upload-comment-input' type="text" placeholder='Add a comment...' />

        <button id='upload-comment-button'>Post</button>
        </div>

        <div id='body'>
          {renderComments()}
        </div>

      </div>
    </div >
  )
}

export default CommentModal