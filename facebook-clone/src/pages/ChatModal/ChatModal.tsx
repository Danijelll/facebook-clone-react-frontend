import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../features/Messages/MessageSlice';
import { AppDispatch, RootStore } from '../../features/store';
import { toggleChatModalModal } from '../../features/Ui/UiSlice';
import MessageItem from './MessageItem/MessageItem';


function ChatModal() {
    const userData = useSelector((state: RootStore) => state.user.currentUser);
    const messages = useSelector((state: RootStore) => state.messages.messages);
    const friendData = useSelector((state: RootStore) => state.user.currentFriend);
    const [message, setMessage] = useState<any>();

    const dispatch: AppDispatch = useDispatch();

    const messageData = {
        sender: userData?.id.toString(),
        receiver: friendData?.id.toString(),
        message: message
    }

    const loadMessages = () => {
        return messages?.map(message =>
            <MessageItem
                key={message?.createdOn?.toString()}
                id={message.id}
                sender={message.sender}
                receiver={message.receiver}
                message={message.message}
                createdOn={message.createdOn}
            />)
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


                {loadMessages()}

            </div>
        </div>
    )
}

export default ChatModal