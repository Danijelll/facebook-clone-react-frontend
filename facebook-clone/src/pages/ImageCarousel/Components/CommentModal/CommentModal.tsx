import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeCommentModal } from '../../../../features/Ui/UiSlice'


function CommentModal() {
    const dispatch = useDispatch();

  return (
    <div className='modal-background' onClick={() => dispatch(closeCommentModal())}>
    <div id='modal-container' onClick={(e) => e.stopPropagation()}>
        <button id='close-modal-button' onClick={() => dispatch(closeCommentModal())}> X </button>

        <div id='body'>
            
        </div>

        <div id='footer'>
           
        </div>

    </div>
</div >
  )
}

export default CommentModal