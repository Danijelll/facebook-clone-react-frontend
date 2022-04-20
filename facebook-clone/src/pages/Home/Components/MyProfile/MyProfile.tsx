import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCurrentUserAlbums } from '../../../../features/Albums/AlbumSlice';
import { RootStore } from '../../../../features/store';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import './MyProfile.scss'

function MyProfile() {
  const userData = useSelector((state: RootStore) => state.user.currentUser);
  const albums = useSelector((state: RootStore) => state.album.userAlbums);
  const dispatch = useDispatch();

  const renderAlbum = () => {
    return albums?.map(album => <ImageCarousel key={album.id} createdOn={album.createdOn} captions={album.caption} images={album.images} />)
  }

  useEffect(() => {
    if (userData.id) {
      dispatch(getAllCurrentUserAlbums(userData?.id));      
    }
  }, [userData])

  return (
    <div id='my-profile-wrapper'>
      <div className='album-item'>
        {renderAlbum()}
      </div>
    </div>
  )
}

export default MyProfile
