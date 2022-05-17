import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../../../features/store';
import { toggleEditProfileModal } from '../../../../features/Ui/UiSlice';
import { editUserCoverImage, editUserProfileImage } from '../../../../features/Users/userSlice';
import { IUserUpdateCoverImageData, IUserUpdateProfileImageData } from '../../../../interfaces/IUser';

function EditProfileModal() {
    const userData = useSelector((state: RootStore) => state.user.currentUser);
    const [profileImage, setProfileImage] = useState<FileList | null>();
    const [coverImage, setCoverImage] = useState<FileList | null>();

    const handleProfileImage = (e: React.FormEvent<HTMLInputElement>) => {
        const file = (e.target as HTMLInputElement).files;
        setProfileImage(file);
    }

    const handleCoverImage = (e: React.FormEvent<HTMLInputElement>) => {
        const file = (e.target as HTMLInputElement).files;
        setCoverImage(file);
    }

    const submitProfileImage = async () => {
        if (!profileImage) {
            return;
        }
        const data = {
            profileImage: profileImage[0]
        } as IUserUpdateProfileImageData;

        await dispatch(editUserProfileImage(data));
    }

    const submitCoverImage = async () => {
        if (!coverImage) {
            return;
        }
        const data = {
            coverImage: coverImage[0]
        } as IUserUpdateCoverImageData;

        await dispatch(editUserCoverImage(data));
    }

    const dispatch = useDispatch();
    return (
        <div className='modal-background'
            onClick={() =>
                dispatch(toggleEditProfileModal())}>

            <div id='modal-container'
                onClick={(e) =>
                    e.stopPropagation()}>

                <button id='close-modal-button'
                    onClick={() =>
                        dispatch(toggleEditProfileModal())}>
                    X
                </button>

                <div id='title'>
                    <h1>Edit Profile</h1>
                </div>

                <div id='body'>
                    <input
                        accept=".png,.jpg,.jpeg"
                        id='file-input'
                        type="file"
                        onChange={handleProfileImage}
                    />

                    <input
                        accept=".png,.jpg,.jpeg"
                        id='file-input'
                        type="file"
                        onChange={handleCoverImage}
                    />
                </div>

                <div id='footer'>
                    <button id='upload-image'
                        onClick={submitProfileImage}>
                        Update profile image
                    </button>

                    <button id='upload-image'
                        onClick={submitCoverImage}>
                        Update cover image
                    </button>
                </div>

            </div>
        </div>
    )
}

export default EditProfileModal