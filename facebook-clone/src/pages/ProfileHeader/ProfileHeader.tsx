import './ProfileHeader.scss'

interface ProfileHeaderProps {
    profileImage: string,
    username: string,
    createdOn: string,
    showAddFriend: boolean
}

function ProfileHeader(props: ProfileHeaderProps) {
    const { profileImage, username, createdOn, showAddFriend } = props;

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
            {showAddFriend && <button id='add-friend-button'>Add Friend</button> }
        </div>
    )
}

export default ProfileHeader