import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { RootStore } from '../../features/store';
import { toggleUserSearchModal } from '../../features/Ui/UiSlice';
import { searchUsers, searchUsersWithBanned } from '../../features/Users/userSlice';
import UserItem from './UserItem/UserItem';
import './UserSearchModal.scss'

function UserSearch() {
    const userData = useSelector((state: RootStore) => state.user.currentUser);
    const [query, setQuery] = useState<string>();
    const [value] = useDebounce(query, 400);
    const userList = useSelector((state: RootStore) => state.user.userList);

    const dispatch = useDispatch();

    useEffect(() => {
        if (value !== undefined && value !== '' && userData?.role === 0) {
            dispatch(searchUsers(value))
        }
        if (value !== undefined && value !== '' && userData?.role === 1) {
            dispatch(searchUsersWithBanned(value))
        }
    }, [value])

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
        <div className='comment-modal-background' onClick={() => dispatch(toggleUserSearchModal())}>
            <div onClick={(e) => e.stopPropagation()} id='user-search-wrapper'>
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
            </div>
        </div >
    )
}

export default UserSearch