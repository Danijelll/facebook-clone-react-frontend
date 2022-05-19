import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom"
import { login } from "../../features/Users/userSlice";
import './Login.scss'
import { AppDispatch, RootStore } from "../../features/store";
import { ILogin } from "../../interfaces/IUser";
import { ILoginProps } from "../../interfaces/IRouterProps";
import ChatService from "../../services/ChatService";

import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
function Login() {
  const userData = useSelector((state: RootStore) => state.user.currentUser);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const CHAT_URL = 'https://localhost:5001/chatHub'

  const sendMessage = async () => {
    const user = 'joe'
    const message = 'this is my message'
    try {
      const connection = new HubConnectionBuilder()
        .withUrl(CHAT_URL)
        .configureLogging(LogLevel.Information)
        .build()

      connection.on("ReceiveMessage", (user, message) => {
        console.log(user, message);

      })

      await connection.start();
      await connection.invoke("SendMessage", user, message)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (userData) {
      navigate('/home');
    }
  }, [userData])


  const [loginData, setLoginData] = useState<ILogin>({
    username: '',
    password: ''
  } as ILogin);

  const handleInput = (field: string, value: string) => {
    setLoginData({ ...loginData, [field]: value });
  }

  const handleLogin = async () => {
    const result = await dispatch(login(loginData));

    if (result.payload) {
      navigate('/login', { state: { username: loginData.username } });
    }
  }

  return (
    <div className='wrapper'>

      {location.state &&
        (location.state as ILoginProps).isFirstLogin &&
        <p className='confirm-email'>
          Please confirm your email before loging in
        </p>}

      <input
        className="input"
        value={loginData.username}
        onChange={e => handleInput('username', e.target.value)}
        placeholder='Username...'
      />

      <input
        className="input"
        value={loginData.password}
        onChange={e => handleInput('password', e.target.value)}
        type="password"
        placeholder='Password...'
      />

      <button
        onClick={handleLogin}
        className="button"
      >
        Login
      </button>

      <button onClick={() =>
        sendMessage()
      }> send</button>

      <p className="link-text">
        Dont have an account?
        <Link className="link"
          to="/register">
          Register
        </Link>
      </p>

    </div >
  )
}

export default Login