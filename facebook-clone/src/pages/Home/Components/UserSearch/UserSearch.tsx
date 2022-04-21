import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { RootStore } from '../../../../features/store';
import { searchUsers } from '../../../../features/Users/userSlice';
import UserItem from './UserItem/UserItem';
import './UserSearch.scss'

function UserSearch() {
    const [query, setQuery] = useState<string>();
    const [value] = useDebounce(query, 400);
    const dispatch = useDispatch();
    const userList = useSelector((state: RootStore) => state.user.userList);


    useEffect(() => {
        if (value !== undefined && value !== '') {
            dispatch(searchUsers(value))
            console.log(userList);
        }
    }, [value])

    const renderUserList = () => {
        return userList?.map(user => <UserItem key={user.id} id={user.id} username={user.username} profileImage={user.profileImage} />)
      }

    return (
        <div id='user-search-wrapper'>
            <div id='user-search-header'>
                <input id='user-search-input' onChange={(e) => {
                    setQuery(e.target.value);
                }} placeholder='Search...' type="text" />
                <img id='user-search-svg' src="../../../../search.svg" alt="" />
            </div>
            <div>
                {renderUserList()}
            </div>
        </div>
    )
}

export default UserSearch