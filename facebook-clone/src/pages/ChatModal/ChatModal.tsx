import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  sendMessage } from '../../features/Messages/MessageSlice';
import { AppDispatch, RootStore } from '../../features/store';
import { toggleChatModalModal } from '../../features/Ui/UiSlice';


function ChatModal() {
    const userData = useSelector((state: RootStore) => state.user.currentUser);
    const friendData = useSelector((state: RootStore) => state.user.currentFriend);
    const [message, setMessage] = useState<any>();

    const dispatch: AppDispatch = useDispatch();

    const messageData = {
        sender: userData?.username,
        receiver: friendData?.username,
        message: message
    }

    return (
        <div
            className='comment-modal-background'
            onClick={() => dispatch(toggleChatModalModal())}>

            <div
                id='user-search-wrapper'
                onClick={(e) => e.stopPropagation()}>
                <div id='user-search-header'>
                    <input
                        id='user-search-input'
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        placeholder={'Message ' + friendData?.username + '...'}
                        type="text"
                    />
                    <button onClick={() => dispatch(sendMessage(messageData))}>Send</button>
                </div>


            </div>
        </div>
    )
}

export default ChatModal