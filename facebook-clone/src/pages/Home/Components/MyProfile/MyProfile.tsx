import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCurrentUserAlbums } from '../../../../features/Albums/AlbumSlice';
import { connect, receiveMessages } from '../../../../features/Messages/MessageSlice';
import { RootStore } from '../../../../features/store';
import ImageCarousel from '../../../ImageCarousel/ImageCarousel';
import './MyProfile.scss'

function MyProfile() {
  const currentOpenAlbum = useSelector((state: RootStore) => state.album.currentOpenAlbum);
  const userData = useSelector((state: RootStore) => state.user.currentUser);
  const albums = useSelector((state: RootStore) => state.album.userAlbums);
  const images = useSelector((state: RootStore) => state.image.userImages);


  const dispatch = useDispatch();

  useEffect(() => {
    if (userData?.id) {
      dispatch(getAllCurrentUserAlbums(userData?.id));
      dispatch(connect(userData?.id.toString()));
      dispatch(receiveMessages());
    }
  }, [userData, images, currentOpenAlbum])

  const renderAlbum = () => {
    return albums?.map(album =>
      <ImageCarousel
        key={album?.id}
        albumId={album?.id}
        username={userData?.username}
        userProfileImage={userData?.profileImage}
        userId={album?.userId}
        createdOn={album?.createdOn}
        captions={album?.caption}
        images={album?.images}
      />)
  }

  return (
    <div id='my-profile-wrapper'>
      <div className='album-item'>
        {renderAlbum()}
      </div>
    </div>
  )
}

export default MyProfile
