import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../features/store';
import FriendRequestStatusButton from './FriendRequestStatusButton/FriendRequestStatusButton';
import './ProfileHeader.scss'

interface ProfileHeaderProps {
    id: number,
    profileImage: string,
    coverImage: string,
    username: string,
    createdOn: string,
    showAddFriend: boolean
}

function ProfileHeader(props: ProfileHeaderProps) {
    const userData = useSelector((state: RootStore) => state.user.currentUser);
    const { id, profileImage, coverImage, username, createdOn, showAddFriend } = props;

    return (
        <div id='profile-header-wrapper'>
            <div style={{
                backgroundImage: `url(${coverImage})`
            }}
                id='header'>
                <div id='profile-image-container'>
                    <img id='profile-image'
                        src={profileImage}
                        alt={profileImage}
                    />
                </div>
            </div>

            <div id='about-user'>
                <p id='user-name'>
                    {username}
                </p>
                <p id='joined'>
                    Member since: {createdOn?.slice(0, 10)}
                </p>
            </div>
            {showAddFriend && id !== userData?.id &&
                <FriendRequestStatusButton />
            }
        </div>
    )
}

export default ProfileHeader