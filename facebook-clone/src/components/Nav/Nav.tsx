import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { RootStore } from "../../features/store";
import '../Nav/Nav.scss'

function Nav() {

    const userData = useSelector((state: RootStore) => state.user.currentUser);

    return (
        <div className='navWrapper'>
            <Link to="/">
                <div className='logo'>Facebook Clone</div>
            </Link>

            {!userData.id ?

                <div className="options">

                    <Link to="/register">
                        <div className='navOptions'>Register</div>
                    </Link>

                    <Link to="/">
                        <div className='navOptions'>Login</div>
                    </Link>

                </div>

                : null}

            {userData.id ?

                <div className="options">

                    <Link to="/home">
                        <div className='navOptions'>My Profile</div>
                    </Link>

                    <Link to="/friends">
                        <div className='navOptions'>Friends</div>
                    </Link>

                    <Link to="/upload">
                        <div className='navOptions'>Upload Images</div>
                    </Link>

                    <Link to="/logout">
                        <div className='navOptions'>Logout</div>
                    </Link>
                </div>
                
                : null}
        </div>
    )
}

export default Nav