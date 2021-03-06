import { unwrapResult } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { AppDispatch, RootStore } from '../../features/store';
import { confirm2FA, getCurrentUserData } from '../../features/Users/userSlice';
import { I2FAProps } from '../../interfaces/IRouterProps';
import './TwoFactorCode.scss'

function TwoFactorCode() {
  const userData = useSelector((state: RootStore) => state.user.currentUser);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const username = (location.state as I2FAProps).username
  const [twoFactorCode, setTwoFactorCode] = useState('1')

  const twoFactorLoginData = {
    username,
    twoFactorCode
  };

  const handle2FA = async () => {
    const result = await dispatch(confirm2FA(twoFactorLoginData));
    const resultData = unwrapResult(result);
    
    if (resultData) {
      dispatch(getCurrentUserData())
      navigate('/home');
    }
  }

  return (
    <div id='two-factor-wrapper'>
      <input
        placeholder='Enter the 2FA Code sent to your email'
        className='two-factor-input'
        onChange={e => setTwoFactorCode(e.target.value)}
        type="text" />

      <button
        className='button'
        onClick={handle2FA}>
        Confirm Login
      </button>
    </div>
  )
}

export default TwoFactorCode