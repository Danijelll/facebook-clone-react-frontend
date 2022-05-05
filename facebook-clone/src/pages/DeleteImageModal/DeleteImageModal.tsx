import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAlbumById } from '../../features/Albums/AlbumSlice';
import { RootStore } from '../../features/store';
import { closeDeleteImageModal } from '../../features/Ui/UiSlice';

function DeleteImageModal() {
    const currentOpenAlbum = useSelector((state: RootStore) => state.album.currentOpenAlbum);

    const dispatch = useDispatch();

    const handleDelete = async () => {
        await dispatch(deleteAlbumById(currentOpenAlbum.id));
        dispatch(closeDeleteImageModal())
        }

    return (
        <div className='modal-background'
            onClick={() => dispatch(closeDeleteImageModal())}>

            <div id='image-menu-modal-container'
                onClick={(e) => e.stopPropagation()}>

                <button id='image-menu-close-modal-button'
                    onClick={() => dispatch(closeDeleteImageModal())}>
                    X
                </button>
                <h2>Are you sure you want to delete this post
                </h2>
                <div id='body'>
                    <button onClick={() => handleDelete()}>
                        Yes
                    </button>

                    <button onClick={() => dispatch(closeDeleteImageModal())}>
                        Cancel
                    </button>
                </div>

            </div>
        </div >
    )
}

export default DeleteImageModal