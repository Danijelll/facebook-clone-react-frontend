import './EditImageModal.scss'
import { useDispatch } from 'react-redux';
import { closeEditImageModal } from '../../features/Ui/UiSlice';

function ImageMenuModal() {
    const dispatch = useDispatch();

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
                    edit
                </div>

            </div>
        </div >
    )
}

export default ImageMenuModal