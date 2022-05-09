import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { checkFriendRequestStatus, confirmFriendRequest, deleteFriendRequest, sendFriendRequest } from '../../../features/Friendships/FriendshipSlice';
import { RootStore } from '../../../features/store';
import { FriendRequestStatusEnum } from '../../../Models/FriendRequestStatusEnum';
import './FriendRequestStatusButton.scss'

function FriendRequestStatusButton() {
    const currentFriend = useSelector((state: RootStore) => state.user.currentFriend);
    const friendRequestStatus = useSelector((state: RootStore) => state.friendship.RequestStatus);
    const [buttonText, setButtonText] = useState('')
    const [className, setClassName] = useState('')

    const dispatch = useDispatch();
    let handleOnClick = () => console.log('aaa');

    useEffect(() => {
        if (currentFriend?.id !== undefined) {
            dispatch(checkFriendRequestStatus(currentFriend?.id))

            console.log('status', friendRequestStatus);

            if (friendRequestStatus === FriendRequestStatusEnum.Friends) {
                setButtonText(() => ('Remove Friend'));
                setClassName(() => ('friend-request-button-friends'));
                handleOnClick = () => dispatch(deleteFriendRequest(currentFriend?.id));
            }
            if (friendRequestStatus === FriendRequestStatusEnum.NoRequest) {
                setButtonText(() => ('Add Friend'));
                setClassName(() => ('friend-request-button-no-request'));
                handleOnClick = () => dispatch(sendFriendRequest(currentFriend?.id));
            }
            if (friendRequestStatus === FriendRequestStatusEnum.PendingOutgoing) {
                setButtonText(() => ('Cancel Friend Request'));
                setClassName(() => ('friend-request-button-pending-outgoing'));
                handleOnClick = () => dispatch(deleteFriendRequest(currentFriend?.id));
            }
            if (friendRequestStatus === FriendRequestStatusEnum.PendingIncoming) {
                setButtonText(() => ('Accept Friend Request'));
                setClassName(() => ('friend-request-button-pending-incoming'));
                handleOnClick = () => dispatch(confirmFriendRequest(currentFriend?.id));
            }
        }
    }, [friendRequestStatus, currentFriend, handleOnClick])


    return (
        <button onClick={() => handleOnClick()} className={className}>
            {buttonText}
        </button>
    )
}

export default FriendRequestStatusButton