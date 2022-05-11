import React, { useEffect, useState } from 'react'
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
import './Feed.scss'

function Feed() {
  const setShowCommentModal = useSelector((state: RootStore) => state.ui.setShowCommentModal);
  const setShowFriendRequestModal = useSelector((state: RootStore) => state.ui.setShowFriendRequestModal);
  const setShowUserSearchModal = useSelector((state: RootStore) => state.ui.setShowUserSearchModal);
  const setShowEditImageModal = useSelector((state: RootStore) => state.ui.setShowEditImageModal);
  const setShowDeleteImageModal = useSelector((state: RootStore) => state.ui.setShowDeleteImageModal);
  const setShowEditCommentModal = useSelector((state: RootStore) => state.ui.setShowEditCommentModal);
  const userFriendsAlbums = useSelector((state: RootStore) => state.album.userFriendsAlbums);
  const dispatch = useDispatch();

  let [page, setPage] = useState<number>(1)
  let [itemsPerPage, setItemsPerPage] = useState<number>(10)

  let postOnPage = {
    itemsPerPage: itemsPerPage,
    page: page,
  }

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
    dispatch(getAllFriendsAlbumsWithImages(postOnPage))
    console.log(userFriendsAlbums);

  }, [postOnPage])

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
        <div id='friend-request-modal-page-buttons'>
          <button
            id='comment-modal-page-button'
            onClick={() => setPage(page - 1)}>
            &lt;
          </button>
          <p id='comment-modal-page-text'>Page {page}</p>
          <button
            id='comment-modal-page-button'
            onClick={() => { setPage(page + 1) }}>
            &gt;
          </button>
        </div>
        <div id='feed-posts-per-page-button-wrapper'>
          <p id='feed-posts-per-page-button-text' >Posts per page</p>
          <button id='feed-posts-per-page-button' onClick={()=>setItemsPerPage(3)}>3</button>
          <button id='feed-posts-per-page-button' onClick={()=>setItemsPerPage(5)}>5</button>
          <button id='feed-posts-per-page-button' onClick={()=>setItemsPerPage(10)}>10</button>

        </div>
      </div>
    </div>
  )
}

export default Feed