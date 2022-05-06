import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cancelFriendRequest, checkFriendRequestStatus, confirmFriendRequest, sendFriendRequest } from '../../../features/Friendships/FriendshipSlice';
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
    ;

    useEffect(() => {
        if (currentFriend?.id !== undefined) {
            dispatch(checkFriendRequestStatus(currentFriend?.id))

            if (friendRequestStatus === FriendRequestStatusEnum.Friends) {
                setButtonText(buttonText => ('Friends'));
                setClassName(className => ('friend-request-button-friends'));
                handleOnClick = () => console.log('bbb')
            }
            if (friendRequestStatus === FriendRequestStatusEnum.NoRequest) {
                setButtonText(buttonText => ('Add Friend'));
                setClassName(className => ('friend-request-button-no-request'));
                handleOnClick = () => dispatch(sendFriendRequest(currentFriend?.id));
            }
            if (friendRequestStatus === FriendRequestStatusEnum.PendingOutgoing) {
                setButtonText(buttonText => ('Cancel Friend Request'));
                setClassName(className => ('friend-request-button-pending-outgoing'));
                handleOnClick = () => dispatch(cancelFriendRequest(currentFriend?.id));
            }
            if (friendRequestStatus === FriendRequestStatusEnum.PendingIncoming) {
                setButtonText(buttonText => ('Accept Friend Request'));
                setClassName(className => ('friend-request-button-pending-incoming'));
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