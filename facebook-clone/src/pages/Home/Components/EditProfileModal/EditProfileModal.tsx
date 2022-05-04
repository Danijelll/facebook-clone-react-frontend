import React from 'react'
import { useDispatch } from 'react-redux'
import { closeEditProfileModal } from '../../../../features/Ui/UiSlice';

function EditProfileModal() {
    const dispatch = useDispatch();
    return (
        <div className='modal-background'
            onClick={() => dispatch(closeEditProfileModal())}>

            <div id='modal-container'
                onClick={(e) => e.stopPropagation()}>

                <button id='close-modal-button'
                    onClick={() => dispatch(closeEditProfileModal())}>
                    X
                </button>

                <div id='title'>
                    <h1>Edit Profile</h1>
                </div>

                <div id='body'>

                </div>

                <div id='footer'>
                    <button id='upload-image'>

                    </button>
                </div>

            </div>
        </div>
    )
}

export default EditProfileModal