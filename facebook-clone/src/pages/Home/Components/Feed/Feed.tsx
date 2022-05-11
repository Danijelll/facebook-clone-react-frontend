import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFriendsAlbumsWithImages } from '../../../../features/Albums/AlbumSlice';
import { RootStore } from '../../../../features/store';
import CommentModal from '../../../CommentModal/CommentModal';
import DeleteImageModal from '../../../DeleteImageModal/DeleteImageModal';
import EditCommentModal from '../../../EditCommentModal/EditCommentModal';
import EditImageModal from '../../../EditImageModal/EditImageModal';
import FriendRequestModal from '../../../FriendRequestModal/FriendRequestModal';
import ImageCarousel from '../../../ImageCarousel/ImageCarousel';
import UserSearchModal from '../../../UserSearch/UserSearchModal';

function Feed() {
  const setShowCommentModal = useSelector((state: RootStore) => state.ui.setShowCommentModal);
  const setShowFriendRequestModal = useSelector((state: RootStore) => state.ui.setShowFriendRequestModal);
  const setShowUserSearchModal = useSelector((state: RootStore) => state.ui.setShowUserSearchModal);
  const setShowEditImageModal = useSelector((state: RootStore) => state.ui.setShowEditImageModal);
  const setShowDeleteImageModal = useSelector((state: RootStore) => state.ui.setShowDeleteImageModal);
  const setShowEditCommentModal = useSelector((state: RootStore) => state.ui.setShowEditCommentModal);
  const userFriendsAlbums = useSelector((state: RootStore) => state.album.userFriendsAlbums);
  const dispatch = useDispatch();

  const renderAlbum = () => {
    return userFriendsAlbums?.map(album =>
      <ImageCarousel
        key={album?.id}
        albumId={album?.id}
        username={album?.username}
        userProfileImage={album?.userProfileImageUrl}
        userId={album?.userId}
        createdOn={album?.createdOn}
        captions={album?.caption}
        images={album?.images}
      />)
  }

  useEffect(() => {
    dispatch(getAllFriendsAlbumsWithImages())
    console.log(userFriendsAlbums);
    
  }, [])
  
  return (
    <div id='my-profile-wrapper'>
      {setShowEditImageModal && <EditImageModal />}
      {setShowDeleteImageModal && <DeleteImageModal />}
      {setShowFriendRequestModal && <FriendRequestModal />}
      {setShowCommentModal && <CommentModal />}
      {setShowEditCommentModal && <EditCommentModal />}
      {setShowUserSearchModal && <UserSearchModal />}
      <div className='album-item'>
        {renderAlbum()}
      </div>
    </div>
  )
}

export default Feed