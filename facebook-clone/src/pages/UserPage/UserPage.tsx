import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { RootStore } from '../../features/store';
import { searchUserById } from '../../features/Users/userSlice';
import { IUserProps } from '../../interfaces/IRouterProps';
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import './UserPage.scss'


function UserPage() {
    const friendData = useSelector((state: RootStore) => state.user.currentFriend);
    const dispatch = useDispatch();
    const location = useLocation();
    const userId = (location.state as IUserProps).userId

    useEffect(() => {
        if (userId != undefined) {
            dispatch(searchUserById(userId));
        }
    }, [])

    return (
        <div id='home-wrapper'>
            <ProfileHeader
                profileImage={friendData?.profileImage}
                coverImage={friendData?.coverImage}
                username={friendData?.username}
                createdOn={friendData?.createdOn}
                showAddFriend={true}
            />
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