import './CommentItem.scss'

interface CommentItemProps {
  userId: number,
  username: string,
  profileImage: string,
  text: string,
  createdOn: Date,
}


function CommentItem(props: CommentItemProps) {
  const { userId, username, profileImage, text, createdOn } = props;

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
    </div>
  )
}

export default CommentItem