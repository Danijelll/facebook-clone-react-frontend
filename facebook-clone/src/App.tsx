import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import ConfirmEmail from './pages/ConfirmEmail/ConfirmEmail';
import UserPage from './pages/UserPage/UserPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from './features/store';
import EditImageModal from './components/Modals/EditImageModal/EditImageModal';
import DeleteImageModal from './components/Modals/DeleteImageModal/DeleteImageModal';
import FriendRequestModal from './components/Modals/FriendRequestModal/FriendRequestModal';
import CommentModal from './components/Modals/CommentModal/CommentModal';
import EditCommentModal from './components/Modals/EditCommentModal/EditCommentModal';
import UserSearchModal from './components/Modals/UserSearchModal/UserSearchModal';
import AddImageModal from './pages/Home/Components/AddImageModal/AddImageModal';
import EditProfileModal from './pages/Home/Components/EditProfileModal/EditProfileModal';
import { useEffect, useState } from 'react';
import { getCurrentUserData } from './features/Users/userSlice';
import Loader from './components/Loader/Loader';
import TwoFactorCode from './pages/2FACode/TwoFactorCode';
import ErrorModal from './components/Modals/ErrorModal/ErrorModal';
import FriendModal from './components/Modals/FriendModal/FriendModal';
import ChatModal from './components/Modals/ChatModal/ChatModal';
import { connect } from './features/Messages/MessageSlice';

function App() {
  const setShowCommentModal = useSelector((state: RootStore) => state.ui.setShowCommentModal);
  const setShowFriendRequestModal = useSelector((state: RootStore) => state.ui.setShowFriendRequestModal);
  const setShowUserSearchModal = useSelector((state: RootStore) => state.ui.setShowUserSearchModal);
  const setShowEditImageModal = useSelector((state: RootStore) => state.ui.setShowEditImageModal);
  const setShowDeleteImageModal = useSelector((state: RootStore) => state.ui.setShowDeleteImageModal);
  const setShowEditCommentModal = useSelector((state: RootStore) => state.ui.setShowEditCommentModal);
  const setShowImageModal = useSelector((state: RootStore) => state.ui.setShowImageModal);
  const setShowEditProfileModal = useSelector((state: RootStore) => state.ui.setShowEditProfileModal);
  const setShowFriendModal = useSelector((state: RootStore) => state.ui.setShowFriendModal);
  const setShowChatModal = useSelector((state: RootStore) => state.ui.setShowChatModal);
  const setShowErrorModal = useSelector((state: RootStore) => state.ui.setShowErrorModal);

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {      
      if (localStorage.getItem('token')) {
        await dispatch(getCurrentUserData());
        setIsLoading(false);
      }
      setIsLoading(false);
    }
    getData();
  }, [])

  return (
    <div className='root'>


      <Router>
        <Nav />
        {isLoading && <Loader />}
        {setShowImageModal && <AddImageModal />}
        {setShowEditProfileModal && <EditProfileModal />}
        {setShowEditImageModal && <EditImageModal />}
        {setShowDeleteImageModal && <DeleteImageModal />}
        {setShowFriendRequestModal && <FriendRequestModal />}
        {setShowCommentModal && <CommentModal />}
        {setShowEditCommentModal && <EditCommentModal />}
        {setShowUserSearchModal && <UserSearchModal />}
        {setShowFriendModal && <FriendModal />}
        {setShowChatModal && <ChatModal />}
        {setShowErrorModal && <ErrorModal />}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/userPage' element={<UserPage />} />
          <Route path='/confirmEmail' element={<ConfirmEmail />} />
          <Route path='/login' element={<TwoFactorCode />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

