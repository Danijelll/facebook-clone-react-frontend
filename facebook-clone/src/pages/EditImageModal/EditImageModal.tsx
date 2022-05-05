import './EditImageModal.scss'
import { useDispatch, useSelector } from 'react-redux';
import { closeEditImageModal } from '../../features/Ui/UiSlice';
import { RootStore } from '../../features/store';
import { useState } from 'react';
import { updateAlbumCaption } from '../../features/Albums/AlbumSlice';

function ImageMenuModal() {
    const currentOpenAlbum = useSelector((state: RootStore) => state.album.currentOpenAlbum);
    const [caption, setCaption] = useState(currentOpenAlbum?.caption)
    const dispatch = useDispatch();

    const handleEdit = async () => {
        await dispatch(updateAlbumCaption(albumUpdateData))
        dispatch(closeEditImageModal())
        }

    const albumUpdateData = {
        id: currentOpenAlbum?.id,
        caption: caption
    }

    return (
        <div className='modal-background'
            onClick={() => dispatch(closeEditImageModal())}>

            <div id='image-menu-modal-container'
                onClick={(e) => e.stopPropagation()}>

                <button id='image-menu-close-modal-button'
                    onClick={() => dispatch(closeEditImageModal())}>
                    X
                </button>

                <div id='body'>
                    <input
                        onChange={e => setCaption(e.target.value)}
                        type="text"
                        placeholder={currentOpenAlbum?.caption}
                    />

                    <button onClick={() => handleEdit()}>
                        Edit caption
                    </button>
                    
                    <button>Cancel</button>
                </div>

            </div>
        </div >
    )
}

export default ImageMenuModal