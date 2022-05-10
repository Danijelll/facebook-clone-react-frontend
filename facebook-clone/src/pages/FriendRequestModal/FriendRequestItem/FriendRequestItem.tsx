import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { AppDispatch, RootStore } from '../../../features/store';
import { searchUserById } from '../../../features/Users/userSlice';

interface FriendRequestItemProps {
    id: number
    firstUserId: number
    secondUserId: number
    createdOn: Date
}

function FriendRequestItem(props: FriendRequestItemProps) {
    const friendData = useSelector((state: RootStore) => state.user.currentFriend);
    const dispatch: AppDispatch = useDispatch();
    const { id, firstUserId, secondUserId, createdOn } = props;

    useEffect(() => {
      dispatch(searchUserById(firstUserId))
    }, [])
    

    const navigate = useNavigate();

    const fetchUser = async () => {
        const result = await dispatch(searchUserById(firstUserId));
        const resultData = unwrapResult(result);

        if (resultData) {
            navigate('/userPage', { state: { userId: firstUserId } });
        }
    }

    return (
        <div onClick={fetchUser} id='user-item-wrapper'>

            <img
                id='user-item-profile-image'
                src={friendData?.profileImage}
                alt={friendData?.profileImage}
            />

            <div id='user-item-username'>{friendData?.username}</div>
        </div>
    )
}

export default FriendRequestItem