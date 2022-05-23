import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../features/store';
import { toggleChatModalModal, toggleFriendModal } from '../../../features/Ui/UiSlice';
import { searchUserById } from '../../../features/Users/userSlice';

interface UserItemProps {
    userId: number,
    username: string,
    profileImage: string,
}

function UserItem(props: UserItemProps) {
    const dispatch: AppDispatch = useDispatch();
    const { userId, username, profileImage } = props;


    const fetchUser = async () => {
        await dispatch(searchUserById(userId));
        dispatch(toggleFriendModal())
        dispatch(toggleChatModalModal())
    }

    return (
        <div onClick={fetchUser} id='user-item-wrapper'>

            <img
                id='user-item-profile-image'
                src={profileImage}
                alt={profileImage}
            />

            <div id='user-item-username'>{username}</div>
        </div>
    )
}

export default UserItem
