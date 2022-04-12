import { Link } from "react-router-dom"
import './Login.scss'

function Login() {
  return (
    <div className='wrapper'>
        
        <input className="input" placeholder='Username...' />
        <input className="input" type="password" placeholder='Password...' />
        <button onClick={ () => {console.log("asd");
        }} className="button">Login</button>
        <p className="link-text">Dont have an account? <Link className="link" to="/register">Register</Link></p>

    </div>
  )
}

export default Login