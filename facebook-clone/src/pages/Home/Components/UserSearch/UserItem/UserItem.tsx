import { useDispatch } from 'react-redux';
import { searchUserById } from '../../../../../features/Users/userSlice';
import './UserItem.scss'


interface UserItemProps {
    userId: number,
    username: string,
    profileImage: string,
}

function UserItem(props: UserItemProps) {
    const dispatch = useDispatch()
    const { userId, username, profileImage } = props;

    return (
        <div onClick={() => (dispatch(searchUserById(userId)))} id='user-item-wrapper'>
            <img id='user-item-profile-image' src={profileImage} alt={profileImage} />
            <div id='user-item-username'>{username}</div>
        </div>
    )
}

export default UserItem