import { unwrapResult } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { AppDispatch } from '../../features/store';
import { confirm2FA, getCurrentUserData } from '../../features/Users/userSlice';
import { I2FAProps } from '../../interfaces/IRouterProps';
import { ILogin, ITwoFactorCode } from '../../interfaces/IUser';

function TwoFactorCode() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const username = (location.state as I2FAProps).username
  const [twoFactorCode, setTwoFactorCode] = useState('')

  const twoFactorLoginData ={
    username,
    twoFactorCode
  };

  const handle2FA = async () => {
    const result = await dispatch(confirm2FA(twoFactorLoginData));
    dispatch(getCurrentUserData())
    const resultData = unwrapResult(result);

    if (resultData) {
      navigate('/home');
    }
  }

  return (
      <div>
          <input onChange={e => setTwoFactorCode(e.target.value)} type="text" />
          <button onClick={handle2FA}>2fa</button>
      </div>
  )
}

export default TwoFactorCode