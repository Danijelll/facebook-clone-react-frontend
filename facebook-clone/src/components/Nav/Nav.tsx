import { Link } from "react-router-dom"
import '../Nav/Nav.scss'

function Nav() {
    return (
        <div className='navWrapper'>
            <Link to="/">
                <div className='logo'>Facebook Clone</div>
            </Link>

            <div className="options">
                <Link to="/register">
                    <div className='navOptions'>Register</div>
                </Link>

                <Link to="/">
                    <div className='navOptions'>Login</div>
                </Link>
            </div>

        </div>
    )
}

export default Nav