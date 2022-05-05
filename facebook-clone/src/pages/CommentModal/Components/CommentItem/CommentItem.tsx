import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCommentById } from '../../../../features/Comments/CommentSlice';
import './CommentItem.scss'

interface CommentItemProps {
  commentId: number
  username: string,
  profileImage: string,
  text: string,
  createdOn: Date,
}


function CommentItem(props: CommentItemProps) {
  const {  commentId, username, profileImage, text, createdOn } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    
  }, [])
  

  return (
    <div id='comment-item-wrapper'>
      <img id='comment-item-profile-image' src={profileImage} alt={profileImage} />
      <div id='comment-item-content'>

        <div id='comment-item-username'>
          {username}
        </div>

        <div id='comment-item-text'>
          {text}
        </div>

        <div id='comment-item-time'>
          {createdOn.toString().slice(0,10)}
        </div>

      </div>
      <div onClick={() => dispatch(deleteCommentById(commentId))} id='comment-item-delete-button'>X</div>
    </div>
  )
}

export default CommentItem