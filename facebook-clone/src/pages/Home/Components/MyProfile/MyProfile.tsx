import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCurrentUserImages } from '../../../../features/Images/ImageSlice';
import { RootStore } from '../../../../features/store';
import './MyProfile.scss'

function MyProfile() {
  const userData = useSelector((state: RootStore) => state.user.currentUser);
  const Images = useSelector((state: RootStore) => state.image.userImages);

  const dispatch = useDispatch();

useEffect(() => {
  if (userData.id){
    dispatch(getAllCurrentUserImages(userData?.id))
    console.log(Images[0]?.images);
  }

},[userData])

  return (
    <div id='my-profile-wrapper'>
        <div className='album-item'></div>
        <div className='album-item'></div>
        <div className='album-item'></div>
        <div className='album-item'></div>

        <div className='album-item'></div>
        <div className='album-item'></div>

    </div>
  )
}

export default MyProfile

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
