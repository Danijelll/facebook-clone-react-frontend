import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { AppDispatch } from '../../../../features/store';
import { searchUserById } from '../../../../features/Users/userSlice';
import './UserItem.scss'

interface UserItemProps {
    userId: number,
    username: string,
    profileImage: string,
}

function UserItem(props: UserItemProps) {
    const dispatch: AppDispatch = useDispatch();
    const { userId, username, profileImage } = props;

    const navigate = useNavigate();

    const fetchUser = async () => {
        const result = await dispatch(searchUserById(userId));
        const resultData = unwrapResult(result);

        if (resultData) {
            navigate('/userPage', { state: { userId: userId } });
        }
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
