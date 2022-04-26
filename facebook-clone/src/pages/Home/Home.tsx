import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import Loader from '../../components/Loader/Loader';
import { RootStore } from '../../features/store';
import { getCurrentUserData } from '../../features/Users/userSlice'
import AddImageModal from './Components/AddImageModal/AddImageModal';
import Feed from './Components/Feed/Feed';
import MyProfile from './Components/MyProfile/MyProfile';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import './Home.scss'

function Home() {
  const userData = useSelector((state: RootStore) => state.user.currentUser);
  const setShowModal = useSelector((state: RootStore) => state.ui.setShowModal);

  const [mainContent, setMainContent] = useState(true)
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      await dispatch(getCurrentUserData());

      setIsLoading(false);
    }

    getData();
  })

  useEffect(() => {
    if (userData?.id && !userData?.isEmailConfirmed) {
      navigate('/confirmEmail')
    }
  }, [userData])

  useEffect(() => {
  }, [setShowModal])

  return (
    <div id='home-wrapper'>
      {isLoading && <Loader />}

      {setShowModal && <AddImageModal/>}

      <ProfileHeader profileImage={userData?.profileImage} username={userData?.username} createdOn={userData?.createdOn} showAddFriend={false}/>

        <div id='main-wrapper'>
          <div id='wrapper-header'>
            <div style={{ backgroundColor: mainContent ? '#1e1e1e' : '' }} onClick={() => setMainContent(true)} id='profile-button'>My Profile</div>
            <div style={{ backgroundColor: mainContent ? '' : '#1e1e1e' }} onClick={() => setMainContent(false)} id='feed-button'>Feed</div>
          </div>
          <div id='main-content'>
            {mainContent && <MyProfile />}
            {!mainContent && <Feed />}
          </div>
        </div>

    </div>
  )
}

export default Home