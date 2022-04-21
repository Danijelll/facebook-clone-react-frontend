import { useNavigate } from 'react-router';
import './UserItem.scss'

interface UserItemProps {
    userId: number,
    username: string,
    profileImage: string,
}

function UserItem(props: UserItemProps) {
    const { userId, username, profileImage } = props;
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate('/userPage/'+userId)} id='user-item-wrapper'>
            <img id='user-item-profile-image' src={profileImage} alt={profileImage} />
            <div id='user-item-username'>{username}</div>
        </div>
    )
}

export default UserItem