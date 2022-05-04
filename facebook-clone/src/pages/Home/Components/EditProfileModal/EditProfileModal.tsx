import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../../../features/store';
import { closeEditProfileModal } from '../../../../features/Ui/UiSlice';
import { editUserProfileImage } from '../../../../features/Users/userSlice';
import { IRegister, IUserData, IUserUpdateProfileImageData } from '../../../../interfaces/IUser';

function EditProfileModal() {
    const userData = useSelector((state: RootStore) => state.user.currentUser);
    const [profileImage, setProfileImage] = useState<FileList | null>();

    const handleProfileImage = (e: React.FormEvent<HTMLInputElement>) => {
        const file = (e.target as HTMLInputElement).files;
        setProfileImage(file);
    }

    const submit = async () => {
        if (!profileImage) {
            return;
        }
        const data = {
            id: userData.id,
            username: userData.username,
            profileImage: profileImage[0]
        } as IUserUpdateProfileImageData;
        console.log(data);
        
        await dispatch(editUserProfileImage(data));
    }

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
                    <input
                        id='file-input'
                        type="file"
                        multiple
                        onChange={handleProfileImage}
                    />
                </div>

                <div id='footer'>
                    <button id='upload-image'
                        onClick={submit}>
                        Update profile image
                    </button>
                </div>

            </div>
        </div>
    )
}

export default EditProfileModal