import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import Loader from '../../components/Loader/Loader';
import { RootStore } from '../../features/store';
import { getCurrentUserData, UserSliceState } from '../../features/Users/userSlice'
import AddImageModal from './Components/AddImageModal/AddImageModal';
import Feed from './Components/Feed/Feed';
import MyProfile from './Components/MyProfile/MyProfile';
import './Home.scss'

function Home() {
  const userData = useSelector((state: RootStore) => state.user.currentUser);

  const [mainContent, setMainContent] = useState(true)
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      await dispatch(getCurrentUserData());

      setIsLoading(false);
    }

    getData();
  }, [])

  useEffect(() => {
    if (userData.id && !userData.isEmailConfirmed) {
      navigate('/confirmEmail')
    }
  }, [userData])

  return (
    <div id='home-wrapper'>
      { isLoading && <Loader />}

      {showModal && <AddImageModal closeModal={setShowModal} />}

      <div id='header'>
        <div id='profile-image-container'>
          <img id='profile-image' src={userData?.profileImage} />
        </div>
        <button id='upload-image-button' onClick={() => setShowModal(true)}>Upload Images</button>
      </div>

      <div id='about-user'>
        <p id='user-name'>{userData?.username}</p>
        <p id='joined'>Member since: {userData?.createdOn?.slice(0, 10)}</p>
      </div>


      <div id='main-wrapper'>
        <div id='wrapper-header'>
          <div style={{ backgroundColor: mainContent ? '#1e1e1e': ''}} onClick={() => setMainContent(true)} id='profile-button'>My Profile</div>
          <div style={{ backgroundColor: mainContent ? '': '#1e1e1e'}} onClick={() => setMainContent(false)} id='feed-button'>Feed</div>
        </div>
        <div id='main-content'>
        {mainContent && <MyProfile/>}
        {!mainContent && <Feed/>}
        </div>
      </div>

    </div>
  )
}

export default Home