import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessages, getMessages, sendMessage } from '../../features/Messages/MessageSlice';
import { AppDispatch, RootStore } from '../../features/store';
import { toggleChatModalModal } from '../../features/Ui/UiSlice';
import MessageItem from './MessageItem/MessageItem';


function ChatModal() {
    const userData = useSelector((state: RootStore) => state.user.currentUser);
    const messages = useSelector((state: RootStore) => state.messages.messages);
    const friendData = useSelector((state: RootStore) => state.user.currentFriend);
    const [text, setText] = useState<any>('');

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(getMessages(friendData?.id))
    }, [])


    const messageData = {
        senderId: userData?.id.toString(),
        receiverId: friendData?.id.toString(),
        text: text
    }

    const loadMessages = () => {
        return messages?.map(message =>
            <MessageItem
                key={message.id}
                id={message.id}
                senderId={parseInt(message.senderId)}
                receiverId={parseInt(message.receiverId)}
                message={message.text}
                createdOn={message.createdOn}
            />)
    }

    return (
        <div
            className='comment-modal-background'
            onClick={() => { dispatch(toggleChatModalModal()); dispatch(clearMessages()) }}>

            <div
                id='user-search-wrapper'
                onClick={(e) => e.stopPropagation()}>

                <div id='chat-modal-message-wrapper'>
                    {loadMessages()}
                </div>

                <div id='message-modal-footer'>
                    <input
                        id='message-modal-input'
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                        placeholder={'Message ' + friendData?.username + '...'}
                        type="text"
                    />
                    <button
                        id='send-message-button'
                        onClick={() => {
                            dispatch(sendMessage(messageData));
                            setText(() => '');
                        }}>
                        Send
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ChatModal