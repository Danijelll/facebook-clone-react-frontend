import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCurrentUserAlbums } from '../../../../features/Albums/AlbumSlice';
import { RootStore } from '../../../../features/store';
import CommentModal from '../../../CommentModal/CommentModal';
import DeleteImageModal from '../../../DeleteImageModal/DeleteImageModal';
import EditCommentModal from '../../../EditCommentModal/EditCommentModal';
import EditImageModal from '../../../EditImageModal/EditImageModal';
import ImageCarousel from '../../../ImageCarousel/ImageCarousel';
import UserSearchModal from '../../../UserSearch/UserSearchModal';
import './MyProfile.scss'

function MyProfile() {
  const setShowCommentModal = useSelector((state: RootStore) => state.ui.setShowCommentModal);
  const setShowUserSearchModal = useSelector((state: RootStore) => state.ui.setShowUserSearchModal);
  const setShowEditImageModal = useSelector((state: RootStore) => state.ui.setShowEditImageModal);
  const currentOpenAlbum = useSelector((state: RootStore) => state.album.currentOpenAlbum);
  const setShowDeleteImageModal = useSelector((state: RootStore) => state.ui.setShowDeleteImageModal);
  const setShowEditCommentModal = useSelector((state: RootStore) => state.ui.setShowEditCommentModal);
  const userData = useSelector((state: RootStore) => state.user.currentUser);
  const albums = useSelector((state: RootStore) => state.album.userAlbums);
  const images = useSelector((state: RootStore) => state.image.userImages);


  const dispatch = useDispatch();

  useEffect(() => {
    if (userData?.id) {
      dispatch(getAllCurrentUserAlbums(userData?.id));
    }
  }, [userData, images, currentOpenAlbum])

  const renderAlbum = () => {
    return albums?.map(album =>
      <ImageCarousel
        key={album?.id}
        albumId={album?.id}
        userId={album?.userId}
        createdOn={album?.createdOn}
        captions={album?.caption}
        images={album?.images}
      />)
  }

  return (
    <div id='my-profile-wrapper'>
      {setShowEditImageModal && <EditImageModal />}
      {setShowDeleteImageModal && <DeleteImageModal />}
      {setShowCommentModal && <CommentModal />}
      {setShowEditCommentModal && <EditCommentModal />}
      {setShowUserSearchModal && <UserSearchModal />}
      <div className='album-item'>
        {renderAlbum()}
      </div>
    </div>
  )
}

export default MyProfile
