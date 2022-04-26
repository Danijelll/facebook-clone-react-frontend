import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkFriendRequestStatus, sendFriendRequest } from '../../features/Friendships/FriendshipSlice';
import { RootStore } from '../../features/store';
import './ProfileHeader.scss'

interface ProfileHeaderProps {
    profileImage: string,
    username: string,
    createdOn: string,
    showAddFriend: boolean
}

function ProfileHeader(props: ProfileHeaderProps) {
    const { profileImage, username, createdOn, showAddFriend } = props;
    const friendData = useSelector((state: RootStore) => state.user.currentFriend);
    const dispatch = useDispatch();

    useEffect(() => {
        if (friendData != undefined) {
            dispatch(checkFriendRequestStatus(friendData?.id))
        }
    })

    return (
        <div id='profile-header-wrapper'>
            <div id='header'>
                <div id='profile-image-container'>
                    <img id='profile-image' src={profileImage} alt={profileImage} />
                </div>
            </div>

            <div id='about-user'>
                <p id='user-name'>{username}</p>
                <p id='joined'>Member since: {createdOn?.slice(0, 10)}</p>
            </div>
            {showAddFriend && <button onClick={() => { dispatch(sendFriendRequest(friendData.id)) }} id='add-friend-button'>Add Friend</button>}
        </div>
    )
}

export default ProfileHeader