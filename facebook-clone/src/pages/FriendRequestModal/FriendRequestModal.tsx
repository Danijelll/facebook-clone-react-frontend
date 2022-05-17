import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllIncomingFriendRequests } from '../../features/Friendships/FriendshipSlice';
import { RootStore } from '../../features/store';
import { toggleFriendRequestModal } from '../../features/Ui/UiSlice';
import FriendRequestItem from './FriendRequestItem/FriendRequestItem';
import './FriendRequestModal.scss'

function FriendRequestModal() {
    const friendRequestList = useSelector((state: RootStore) => state.friendship.friendRequestList);
    const [page, setPage] = useState(1)


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllIncomingFriendRequests(page))
    }, [page])

    const renderFriendList = () => {
        return friendRequestList?.map(request =>
            <FriendRequestItem
                key={request.id}
                firstUserId={request.firstUserId}
                createdOn={request.createdOn}
            />)
    }

    return (
        <div
            className='comment-modal-background'
            onClick={() =>
                dispatch(toggleFriendRequestModal())}>

            <div
                id='friend-request-wrapper'
                onClick={(e) =>
                    e.stopPropagation()}>

                <div>
                    {renderFriendList()}
                </div>

                {friendRequestList}

                <div id='friend-request-modal-page-buttons'>
                    <button
                        id='comment-modal-page-button'
                        onClick={() =>
                            setPage(page - 1)}>
                        &lt;
                    </button>
                    <p id='comment-modal-page-text'>Page {page}</p>
                    <button
                        id='comment-modal-page-button'
                        onClick={() => { setPage(page + 1) }}>
                        &gt;
                    </button>
                </div>
            </div>
        </div >
    )
}

export default FriendRequestModal