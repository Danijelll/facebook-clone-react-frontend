import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { searchUsers } from '../../../../features/Users/userSlice';
import './UserSearch.scss'

function UserSearch() {
    const [query, setQuery] = useState<string>();
    const [value] = useDebounce(query, 400);
    const dispatch = useDispatch();

    useEffect(() => {
        if (value != undefined) {
            dispatch(searchUsers(value))
        }
    }, [value])

    return (
        <div id='user-search-wrapper'>
            <div id='user-search-header'>
                <input id='user-search-input' onChange={(e) => {
                    setQuery(e.target.value);
                }} placeholder='Search...' type="text" />
                <img id='user-search-svg' src="../../../../search.svg" alt="" />
            </div>
        </div>
    )
}

export default UserSearch