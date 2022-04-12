import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { login } from "../../features/Users/userSlice";
import './Login.scss'

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <div className='wrapper'>

      <input className="input" value={username} onChange={e => setUsername(e.target.value)} placeholder='Username...' />
      <input className="input" value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password...' />
      <button onClick={() => {
        dispatch(login({username, password}));
      }} className="button">Login</button>
      <p className="link-text">Dont have an account? <Link className="link" to="/register">Register</Link></p>

    </div>
  )
}

export default Login