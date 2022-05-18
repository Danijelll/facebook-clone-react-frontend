import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../../features/store';
import { banUser, unbanUser } from '../../../features/Users/userSlice';

function BanUserButton() {
    const currentFriend = useSelector((state: RootStore) => state.user.currentFriend);
    const [buttonText, setButtonText] = useState('')
    const [className, setClassName] = useState('')

    const dispatch = useDispatch();
    let handleOnClick = () => { };

    useEffect(() => {
        switch (currentFriend?.isBanned) {
            case true: {
                setButtonText(() => ('Unban User'));
                setClassName(() => ('friend-request-button-no-request'));
                handleOnClick = () => dispatch(unbanUser(currentFriend.id));
                break;
            }
            case false: {
                setButtonText(() => ('Ban User'));
                setClassName(() => ('friend-request-button-friends'));
                handleOnClick = () => dispatch(banUser(currentFriend.id));
                break;
            }
        }
    }, [currentFriend, handleOnClick])



    return (
        <button
            onClick={() => handleOnClick()}
            className={className}>
            {buttonText}
        </button>
    )
}

export default BanUserButton