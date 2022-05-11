import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import Loader from '../../components/Loader/Loader';
import { RootStore } from '../../features/store';
import { getCurrentUserData } from '../../features/Users/userSlice'
import Feed from './Components/Feed/Feed';
import MyProfile from './Components/MyProfile/MyProfile';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import './Home.scss'
import { getAllFriendsAlbumsWithImages } from '../../features/Albums/AlbumSlice';

function Home() {
  const userData = useSelector((state: RootStore) => state.user.currentUser);

  const [mainContent, setMainContent] = useState(true)

  let postOnPage = {
    itemsPerPage: 10,
    page: 1,
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData?.id && !userData?.isEmailConfirmed) {
      navigate('/confirmEmail')      
    }
  }, [userData])

  return (
    <div id='home-wrapper'>
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