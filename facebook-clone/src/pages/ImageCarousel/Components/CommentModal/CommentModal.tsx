import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeCommentModal } from '../../../../features/Ui/UiSlice'
import './CommentModal.scss'


function CommentModal() {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log();
    
  }, [])
  

  return (
    <div className='comment-modal-background' onClick={() => dispatch(closeCommentModal())}>
      <div id='comment-modal-container' onClick={(e) => e.stopPropagation()}>

        <div id='body'>

        </div>

        <div id='footer'>

        </div>

      </div>
    </div >
  )
}

export default CommentModal