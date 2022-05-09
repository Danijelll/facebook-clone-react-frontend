import { unwrapResult } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from "../../features/Users/userSlice";
import { Link, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../features/store';
import { IRegister } from '../../interfaces/IUser';
import './Register.scss'


function Register() {
  const dispatch: AppDispatch = useDispatch();

  const [registerData, setRegisterData] = useState<IRegister>({
    username: '',
    email: '',
    password: ''
  } as IRegister);

  const navigate = useNavigate();

  const handleInput = (field: string, value: string) => {
    setRegisterData({ ...registerData, [field]: value });
  }

  const handleRegister = async () => {
    const result = await dispatch(register(registerData));
    const resultData = unwrapResult(result);

    if (resultData) {
      navigate('/', { state: { isFirstLogin: true } });
    }
  }

  return (
    <div className='wrapper'>

      <input
        className="input"
        value={registerData.username}
        onChange={e => handleInput('username', e.target.value)}
        placeholder='Username...'
      />

      <input
        className="input"
        value={registerData.email}
        onChange={e => handleInput('email', e.target.value)}
        type="email"
        placeholder='Email...'
      />

      <input
        className="input"
        value={registerData.password}
        onChange={e => handleInput('password', e.target.value)}
        type="password"
        placeholder='Password...'
      />

      <button
        onClick={handleRegister}
        className="button">
        Register
      </button>

      <p className="link-text">
        Already have an account?
        <Link className="link" to="/">
          Login
        </Link>
      </p>

    </div>
  )
}

export default Register