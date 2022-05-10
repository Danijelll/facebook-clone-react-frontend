import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { toggleFriendRequestModal } from '../../features/Ui/UiSlice';

function FriendRequestModal() {

    const dispatch = useDispatch();

    useEffect(() => {

    }, [])

    const renderUserList = () => {
       
    }
    
  return (
    <div className='comment-modal-background' onClick={() => dispatch(toggleFriendRequestModal())}>
    <div onClick={(e) => e.stopPropagation()} id='user-search-wrapper'>
        <div>
        </div>
    </div>
</div >
  )
}

export default FriendRequestModal