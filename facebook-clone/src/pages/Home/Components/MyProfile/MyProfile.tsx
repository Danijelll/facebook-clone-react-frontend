import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCurrentUserAlbums } from '../../../../features/Albums/AlbumSlice';
import { RootStore } from '../../../../features/store';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import './MyProfile.scss'

function MyProfile() {
  const userData = useSelector((state: RootStore) => state.user.currentUser);
  const Albums = useSelector((state: RootStore) => state.album.userAlbums);
  const [userImages, setUserImage] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    if (userData.id) {
      dispatch(getAllCurrentUserAlbums(userData?.id));//useralbums
    }}, [userData])

    Object.keys(Albums).forEach(function (key:any){
      Albums[key].images.forEach(image => {
        setUserImage(image)
      });
  });

  return (
    <div id='my-profile-wrapper'>
      <div className='album-item'>
        <ImageCarousel />
      </div>

    </div>
  )
}

export default MyProfile

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
