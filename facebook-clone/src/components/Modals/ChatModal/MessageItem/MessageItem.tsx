import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../../features/store';
import './MessageItem.scss'

interface MessageItemProps {
    id: number,
    senderId: number,
    receiverId: number,
    message: string,
    createdOn: Date,
}

function MessageItem(props: MessageItemProps) {
    const userData = useSelector((state: RootStore) => state.user.currentUser);
    const friendData = useSelector((state: RootStore) => state.user.currentFriend);

    const { id, senderId, receiverId, message, createdOn } = props;

    return (
        <div id='message-wrapper'>
            {userData?.id === senderId &&
                <div id='self-message-wrapper'>
                    {message}
                </div>

            }
            {friendData?.id === senderId &&
                <div>
                    <div
                        id='friend-username' >
                        {friendData?.username}
                    </div>
                    <div
                        id='friend-profile-image-message-wrapper'>
                        <img
                            id='message-friend-profile-image'
                            src={friendData.profileImage}
                            alt="friendProfileImage" />
                        <div id='friend-message-wrapper'>
                            {message}
                        </div>

                    </div>
                </div>
            }

        </div>
    )
}

export default MessageItem