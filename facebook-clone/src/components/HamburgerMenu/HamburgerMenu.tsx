import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AppDispatch } from '../../features/store';
import { toggleAddImageModal, toggleEditProfileModal, toggleFriendRequestModal, toggleUserSearchModal } from '../../features/Ui/UiSlice';
import { clearUserData, logout } from '../../features/Users/userSlice';
import './HamburgerMenu.scss'

function HamburgerMenu() {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        const result = await dispatch(logout());
        await dispatch(clearUserData());
        const resultData = unwrapResult(result);

        if (resultData) {
            navigate('/');
        }
    }

    return (
        <div className="hamburger-menu">
            <input
                id="menu__toggle"
                type="checkbox" />
            <label
                className="menu__btn"
                htmlFor="menu__toggle">
                <span></span>
            </label>

            <ul className="menu__box">
                <li className="menu__item">
                    <Link to="/home">
                        <div className='navOptions'>
                            My Profile
                        </div>
                    </Link>
                </li>

                <li className="menu__item">
                    <div onClick={() => dispatch(toggleEditProfileModal())}>
                        <div className='navOptions'>Edit Profile</div>
                    </div>
                </li>

                <li className="menu__item">
                    <div onClick={() => dispatch(toggleUserSearchModal())}>
                        <div className='navOptions'>User Search</div>
                    </div>
                </li>

                <li className="menu__item">
                    <div onClick={() => dispatch(toggleFriendRequestModal())}>
                        <div className='navOptions'>Friend Requests</div>
                    </div>
                </li>

                <li className="menu__item">
                    <div onClick={() => dispatch(toggleAddImageModal())}>
                        <div className='navOptions'>Upload Images</div>
                    </div>
                </li>

                <li className="menu__item">
                    <div onClick={handleLogout}>
                        <div className='navOptions'>Logout</div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default HamburgerMenu