import React from 'react'

interface CommentItemProps {
  userId: number,
  text: string,
  createdOn: Date,
}


function CommentItem(props: CommentItemProps) {
  const { userId, text, createdOn } = props;

  return (
    <div>
      {userId}
      {text}
      {createdOn}
    </div>
  )
}

export default CommentItem