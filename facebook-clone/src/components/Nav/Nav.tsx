import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { RootStore } from "../../features/store";
import { showAddImageModal } from "../../features/Ui/UiSlice";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import '../Nav/Nav.scss'

function Nav() {
    const userData = useSelector((state: RootStore) => state.user?.currentUser);

useEffect(() => {
}, [userData])


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

                    <HamburgerMenu/>

                </div>
            }
        </div>
    )
}

export default Nav