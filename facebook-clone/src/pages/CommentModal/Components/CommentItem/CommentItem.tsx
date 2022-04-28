import React from 'react'

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
    <div>
      {userId}
      {username}
      {profileImage}
      {text}
      {createdOn}
    </div>
  )
}

export default CommentItem