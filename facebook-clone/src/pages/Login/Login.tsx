import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom"
import { getCurrentUserData, login } from "../../features/Users/userSlice";
import { unwrapResult } from '@reduxjs/toolkit'
import './Login.scss'
import { AppDispatch } from "../../features/store";
import { ILogin } from "../../interfaces/IUser";
import { ILoginProps } from "../../interfaces/IRouterProps";

function Login() {
  const dispatch: AppDispatch = useDispatch();

  const [loginData, setLoginData] = useState<ILogin>({
    username: '',
    password: ''
  } as ILogin);

  const navigate = useNavigate();

  const location = useLocation();

  const handleInput = (field: string, value: string) => {
    setLoginData({...loginData, [field]: value});
  }

  const handleLogin = async () => {
    const result = await dispatch(login(loginData));
    const resultData = unwrapResult(result);

    if (resultData) {
      navigate('/home');
    }
  }

  return (
    <div className='wrapper'>

      { location.state && (location.state as ILoginProps).isFirstLogin && <p className='confirm-email'>Please confirm your email before loging in</p>}

      <input className="input" value={loginData.username} onChange={e => handleInput('username', e.target.value)} placeholder='Username...' />
      <input className="input" value={loginData.password} onChange={e => handleInput('password', e.target.value)} type="password" placeholder='Password...' />
      <button onClick={handleLogin} className="button">Login</button>
      <p className="link-text">Dont have an account? <Link className="link" to="/register">Register</Link></p>

    </div>
  )
}

export default Login