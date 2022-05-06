import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommentById, getCommentById } from '../../../../features/Comments/CommentSlice';
import { RootStore } from '../../../../features/store';
import { showEditCommentModal } from '../../../../features/Ui/UiSlice';
import './CommentItem.scss'

interface CommentItemProps {
  userId: number,
  commentId: number
  username: string,
  profileImage: string,
  text: string,
  createdOn: Date,
}


function CommentItem(props: CommentItemProps) {
  const currentOpenAlbum = useSelector((state: RootStore) => state.album.currentOpenAlbum);
  const userData = useSelector((state: RootStore) => state.user.currentUser);
  const { userId, commentId, username, profileImage, text, createdOn } = props;
  const dispatch = useDispatch();

  useEffect(() => {

  }, [])


  return (
    <div id='comment-item-wrapper'>
      <img id='comment-item-profile-image' src={profileImage} alt={profileImage} />
      <div id='comment-item-content'>

        <div id='comment-item-username'>
          {username}
          {userId === userData.id &&
            <img src='edit.svg' onClick={() => { dispatch(showEditCommentModal()); dispatch(getCommentById(commentId)) }} id='comment-item-edit-button'></img>
          }
        </div>

        <div id='comment-item-text'>
          {text}
        </div>

        <div id='comment-item-time'>
          {createdOn.toString().slice(0, 10)}
        </div>

      </div>
      {currentOpenAlbum.userId === userData.id &&
        <div onClick={() => dispatch(deleteCommentById(commentId))} id='comment-item-delete-button'>X</div>
      }
    </div>
  )
}

export default CommentItem