import { useDispatch, useSelector } from 'react-redux';
import { deleteAlbumById } from '../../features/Albums/AlbumSlice';
import { RootStore } from '../../features/store';
import { toggleDeleteImageModal } from '../../features/Ui/UiSlice';
import './DeleteImageModal.scss'

function DeleteImageModal() {
    const currentOpenAlbum = useSelector((state: RootStore) => state.album.currentOpenAlbum);
    const dispatch = useDispatch();

    const handleDelete = async () => {
        await dispatch(deleteAlbumById(currentOpenAlbum.id));
        dispatch(toggleDeleteImageModal())
    }

    return (
        <div className='modal-background'
            onClick={() =>
                dispatch(toggleDeleteImageModal())}>

            <div id='image-menu-modal-container'
                onClick={(e) =>
                    e.stopPropagation()}>

                <button id='image-menu-close-modal-button'
                    onClick={() =>
                        dispatch(toggleDeleteImageModal())}>
                    X
                </button>

                <h2 id='image-menu-delete-title'>
                    Are you sure you want to delete this post
                </h2>
                <div id='body'>
                    <button
                        id='image-menu-delete-yes-button'
                        onClick={() => handleDelete()}>
                        Yes
                    </button>

                    <button
                        id='image-menu-delete-no-button'
                        onClick={() =>
                            dispatch(toggleDeleteImageModal())}>
                        Cancel
                    </button>
                </div>

            </div>
        </div >
    )
}

export default DeleteImageModal