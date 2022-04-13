import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../features/store';
import { UserSliceState } from '../../features/Users/userSlice'
import './Home.scss'

function Home() {
  const userData = useSelector((state: RootStore) => state.user.currentUser);

  return (
    <div id='home-wrapper'>

      <div id='header'>
        <div id='profile-image'></div>
      </div>

      <div id='about-user'>
        <p id='user-name'>{userData?.id}</p>
        <p id='joined'>Member since: 10th of April 2022</p>
      </div>

      <div id='user-images'>

      </div>

    </div>
  )
}

export default Home