import './EditImageModal.scss'
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditImageModal } from '../../../features/Ui/UiSlice';
import { RootStore } from '../../../features/store';
import { useState } from 'react';
import { updateAlbumCaption } from '../../../features/Albums/AlbumSlice';

function ImageMenuModal() {
    const currentOpenAlbum = useSelector((state: RootStore) => state.album.currentOpenAlbum);
    const [caption, setCaption] = useState(currentOpenAlbum?.caption)
    const dispatch = useDispatch();

    const handleEdit = async () => {
        await dispatch(updateAlbumCaption(albumUpdateData))
        dispatch(toggleEditImageModal())
    }

    const albumUpdateData = {
        id: currentOpenAlbum?.id,
        caption: caption
    }

    return (
        <div className='modal-background'
            onClick={() =>
                dispatch(toggleEditImageModal())}>

            <div id='image-menu-modal-container'
                onClick={(e) =>
                    e.stopPropagation()}>

                <button id='image-menu-close-modal-button'
                    onClick={() =>
                        dispatch(toggleEditImageModal())}>
                    X
                </button>

                <div id='body'>
                    <input
                        id='edit-image-modal-input'
                        onChange={e => setCaption(e.target.value)}
                        type="text"
                        placeholder={currentOpenAlbum?.caption}
                    />

                    <button
                        id='edit-image-modal-edit-button'
                        onClick={() => handleEdit()}>
                        Edit caption
                    </button>

                    <button id='edit-image-modal-cancel-button'>
                        Cancel</button>
                </div>

            </div>
        </div >
    )
}

export default ImageMenuModal