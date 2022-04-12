import { Link } from "react-router-dom"
import './Login.scss'

function Login() {
  return (
    <div className='wrapper'>
        
        <input className="input" placeholder='Username...' />
        <input className="input" type="password" placeholder='Password...' />
        <button onClick={ () => {console.log("asd");
        }} className="button">Login</button>
        <Link className="link" to="/register">Dont have an account? Register</Link>

    </div>
  )
}

export default Login