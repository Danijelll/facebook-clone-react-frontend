import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootStore } from '../../features/store';
import { toggleFriendModal } from '../../features/Ui/UiSlice';
import { getAllFriends } from '../../features/Users/userSlice';
import UserItem from './UserItem';

function FriendModal() {
    const userData = useSelector((state: RootStore) => state.user.currentUser);
    const userList = useSelector((state: RootStore) => state.user.userList);

    const dispatch: AppDispatch = useDispatch();

    let [page, setPage] = useState<number>(1)


    const handleNextPage = async () => {
        const result = await dispatch(getAllFriends(page+1));

        const resultData = unwrapResult(result);        
        if (resultData.length) {
            setPage(page + 1)
        }
    }

    useEffect(() => {
            dispatch(getAllFriends(page))
    }, [page])

    const renderUserList = () => {
        return userList?.map(user =>
            <UserItem
                key={user.id}
                userId={user.id}
                username={user.username}
                profileImage={user.profileImage}
            />)
    }

    return (
        <div
            className='comment-modal-background'
            onClick={() => dispatch(toggleFriendModal())}>

            <div
                id='user-search-wrapper'
                onClick={(e) => e.stopPropagation()}>

                <div>
                    {renderUserList()}
                </div>

                <div id='friend-request-modal-page-buttons'>

                    <button
                        id='comment-modal-page-button'
                        onClick={() => { if (page > 1) { setPage(page - 1) } }}>
                        &lt;
                    </button>

                    <p id='comment-modal-page-text'>Page {page}</p>

                    <button
                        id='comment-modal-page-button'
                        onClick={() => { handleNextPage() }}>
                        &gt;
                    </button>

                </div>
            </div>
        </div >
    )
}

export default FriendModal