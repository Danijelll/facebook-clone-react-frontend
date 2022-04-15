import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../features/store';
import { getCurrentUserData, UserSliceState } from '../../features/Users/userSlice'
import AddImageModal from './Components/AddImageModal/AddImageModal';
import './Home.scss'

function Home() {
  const userData = useSelector((state: RootStore) => state.user.currentUser);
  const [showModal, setShowModal] = useState(false);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUserData());
  }, [])
  
  
  return (
    <div id='home-wrapper'>
      {showModal && <AddImageModal closeModal={setShowModal}/>}

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


      <div id='user-images'>

      </div>

    </div>
  )
}

export default Home