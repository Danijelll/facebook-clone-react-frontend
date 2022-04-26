import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../features/store';
import { searchUserById } from '../../features/Users/userSlice';
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import './UserPage.scss'


function UserPage() {
    const friendData = useSelector((state: RootStore) => state.user.currentFriend);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchUserById(friendData?.id))
    }, [friendData])
    
    return (
        <div id='home-wrapper'>
            <ProfileHeader profileImage={friendData?.profileImage} username={friendData?.username} createdOn={friendData?.createdOn} showAddFriend={true} />
            <div id='main-wrapper'>
                <div id='wrapper-header'>
                </div>
                <div id='main-content'>
                </div>
            </div>
        </div>
    )
}

export default UserPage