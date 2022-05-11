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
import EditProfileModal from './Components/EditProfileModal/EditProfileModal';
import { getAllFriendsAlbumsWithImages } from '../../features/Albums/AlbumSlice';

function Home() {
  const userData = useSelector((state: RootStore) => state.user.currentUser);
  const setShowImageModal = useSelector((state: RootStore) => state.ui.setShowImageModal);
  const setShowEditProfileModal = useSelector((state:RootStore) => state.ui.setShowEditProfileModal)

  const [mainContent, setMainContent] = useState(true)
  const [isLoading, setIsLoading] = useState(true);

  let postOnPage = {
    itemsPerPage: 10,
    page: 1,
  }

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
    if (userData?.id && !userData?.isEmailConfirmed) {
      navigate('/confirmEmail')      
    }
  }, [userData])

  return (
    <div id='home-wrapper'>
      {isLoading && <Loader />}

      {setShowImageModal && <AddImageModal />}
      {setShowEditProfileModal && <EditProfileModal/>}

      <ProfileHeader
        id={userData?.id}
        profileImage={userData?.profileImage}
        coverImage={userData?.coverImage}
        username={userData?.username}
        createdOn={userData?.createdOn}
        showAddFriend={false}
      />

      <div id='main-wrapper'>
        <div id='wrapper-header'>

          <div
            style={{
              backgroundColor: mainContent ? '#1e1e1e' : '',
              borderBottom: mainContent ? 'none' : '',
              borderRight: mainContent ? 'none' : ''
            }}
            onClick={() => setMainContent(true)}
            id='profile-button'>
            My Profile
          </div>

          <div
            style={{
              backgroundColor: mainContent ? '' : '#1e1e1e',
              borderBottom: mainContent ? '' : 'none',
              borderLeft: mainContent ? '' : 'none'
            }}
            onClick={() => {setMainContent(false); dispatch(getAllFriendsAlbumsWithImages(postOnPage))}}
            id='feed-button'>
            Feed
          </div>

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