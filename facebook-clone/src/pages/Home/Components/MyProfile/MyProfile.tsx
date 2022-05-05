import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCurrentUserAlbums } from '../../../../features/Albums/AlbumSlice';
import { RootStore } from '../../../../features/store';
import CommentModal from '../../../CommentModal/CommentModal';
import ImageCarousel from '../../../ImageCarousel/ImageCarousel';
import './MyProfile.scss'

function MyProfile() {
  const setShowCommentModal = useSelector((state: RootStore) => state.ui.setShowCommentModal);
  const userData = useSelector((state: RootStore) => state.user.currentUser);
  const albums = useSelector((state: RootStore) => state.album.userAlbums);
  const images = useSelector((state: RootStore) => state.image.userImages);


  const dispatch = useDispatch();

  useEffect(() => {
    if (userData?.id) {
      dispatch(getAllCurrentUserAlbums(userData?.id));
    }
  }, [userData,images])

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
      {setShowCommentModal && <CommentModal/>}
      <div className='album-item'>
        {renderAlbum()}
      </div>
    </div>
  )
}

export default MyProfile
