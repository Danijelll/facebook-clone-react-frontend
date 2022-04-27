import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { RootStore } from "../../features/store";
import { showAddImageModal } from "../../features/Ui/UiSlice";
import '../Nav/Nav.scss'

function Nav() {
    const userData = useSelector((state: RootStore) => state.user?.currentUser);

    const dispatch = useDispatch();

    return (
        <div className='navWrapper'>
            <Link to="/">
                <div className='logo'>Facebook Clone</div>
            </Link>

            {!userData?.id &&

                <div className="options">
                    
                    <Link to="/register">
                        <div className='navOptions'>Register</div>
                    </Link>

                    <Link to="/">
                        <div className='navOptions'>Login</div>
                    </Link>

                </div>
            }

            {userData?.id &&

                <div className="options">

                    <Link to="/home">
                        <div className='navOptions'>My Profile</div>
                    </Link>

                    <Link to="/userSearch">
                        <div className='navOptions'>Search Users</div>
                    </Link>

                    <div onClick={() => dispatch(showAddImageModal())}>
                        <div className='navOptions'>Upload Images</div>
                    </div>

                    <Link to="/logout">
                        <div className='navOptions'>Logout</div>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Nav