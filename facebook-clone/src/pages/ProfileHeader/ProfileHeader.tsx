import './ProfileHeader.scss'

interface ProfileHeaderProps {
    profileImage: string,
    username: string,
    createdOn: string,
}

function ProfileHeader(props: ProfileHeaderProps) {
    const { profileImage, username, createdOn } = props;

    return (
        <div id='profile-header-wrapper'>
            <div id='header'>
                <div id='profile-image-container'>
                    <img id='profile-image' src={profileImage} />
                </div>
            </div>

            <div id='about-user'>
                <p id='user-name'>{username}</p>
                <p id='joined'>Member since: {createdOn?.slice(0, 10)}</p>
            </div>
            <button id='upload-image-button'>Upload Images</button>
        </div>
    )
}

export default ProfileHeader