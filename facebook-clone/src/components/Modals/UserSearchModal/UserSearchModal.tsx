import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { AppDispatch, RootStore } from '../../../features/store';
import { toggleUserSearchModal } from '../../../features/Ui/UiSlice';
import { clearUserData, clearUserList, searchUsers, searchUsersWithBanned } from '../../../features/Users/userSlice';
import UserItem from './UserItem/UserItem';
import './UserSearchModal.scss'

function UserSearch() {
    const userData = useSelector((state: RootStore) => state.user.currentUser);
    const [query, setQuery] = useState<string>();
    const [value] = useDebounce(query, 400);
    const userList = useSelector((state: RootStore) => state.user.userList);

    const dispatch: AppDispatch = useDispatch();

    let [page, setPage] = useState<number>(1)

    let usersOnPage = {
        username: value,
        page: page,
    }

    let usersOnNextPage = {
        username: value,
        page: page + 1,
    }

    const handleNextPage = async () => {
        const result = await dispatch(searchUsers(usersOnNextPage));

        const resultData = unwrapResult(result);        
        if (resultData.length) {
            setPage(page + 1)
        }
    }

    useEffect(() => {
        if (value !== undefined && value !== '' && userData?.role === 0) {
            dispatch(searchUsers(usersOnPage))
        }
        if (value !== undefined && value !== '' && userData?.role === 1) {
            dispatch(searchUsersWithBanned(usersOnPage))
        }
    }, [value, page])

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
            onClick={() => {dispatch(toggleUserSearchModal()); dispatch(clearUserList())}}>

            <div
                id='user-search-wrapper'
                onClick={(e) => e.stopPropagation()}>

                <div id='user-search-header'>
                    <input
                        id='user-search-input'
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }}
                        placeholder='Search...'
                        type="text"
                    />
                    <img
                        id='user-search-svg'
                        src="../../../../search.svg"
                        alt="searchSvg"
                    />
                </div>
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

export default UserSearch