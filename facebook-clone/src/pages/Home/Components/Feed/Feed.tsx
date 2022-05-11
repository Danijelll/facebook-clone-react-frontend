import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFriendsAlbumsWithImages } from '../../../../features/Albums/AlbumSlice';
import { RootStore } from '../../../../features/store';
import ImageCarousel from '../../../ImageCarousel/ImageCarousel';
import './Feed.scss'

function Feed() {
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

  }, [page, itemsPerPage])

  return (
    <div id='my-profile-wrapper'>
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