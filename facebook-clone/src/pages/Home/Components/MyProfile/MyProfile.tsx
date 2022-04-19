import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCurrentUserImages } from '../../../../features/Images/ImageSlice';
import { RootStore } from '../../../../features/store';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import './MyProfile.scss'

function MyProfile() {
  const userData = useSelector((state: RootStore) => state.user.currentUser);
  const Images = useSelector((state: RootStore) => state.image.userImages);
  const [userImages, setUserImage] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    if (userData.id) {
      dispatch(getAllCurrentUserImages(userData?.id));//useralbums
    }}, [userData])

    Object.keys(Images).forEach(function (key:any){
      Images[key].images.forEach(image => {
        console.log(image);
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
