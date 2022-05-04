import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { showAddImageModal, showEditProfileModal } from '../../features/Ui/UiSlice';
import './HamburgerMenu.scss'

function HamburgerMenu() {
    const dispatch = useDispatch();
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>

            <ul className="menu__box">
                <li className="menu__item">
                    <Link to="/home">
                        <div className='navOptions'>My Profile</div>
                    </Link>
                </li>

                <li className="menu__item">
                <div onClick={() => dispatch(showEditProfileModal())}>
                        <div className='navOptions'>Edit Profile</div>
                    </div>
                </li>

                <li className="menu__item">
                    <Link to="/userSearch">
                        <div className='navOptions'>Search Users</div>
                    </Link>
                </li>

                <li className="menu__item">
                    <div onClick={() => dispatch(showAddImageModal())}>
                        <div className='navOptions'>Upload Images</div>
                    </div>
                </li>

                <li className="menu__item">
                    <Link to="/logout">
                        <div className='navOptions'>Logout</div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default HamburgerMenu