import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uploadImages } from '../../../../features/Images/ImageSlice';
import { RootStore } from '../../../../features/store';
import { toggleAddImageModal } from '../../../../features/Ui/UiSlice';
import { IUploadImageData } from '../../../../interfaces/IImage';
import './AddImageModal.scss'

function AddImageModal() {
    const userData = useSelector((state: RootStore) => state.user.currentUser);
    const [images, setImages] = useState<FileList | null>(null);
    const [caption, setCaption] = useState<string>('');

    const dispatch = useDispatch();

    const handleImages = (e: React.FormEvent<HTMLInputElement>) => {
        const files = (e.target as HTMLInputElement).files;
        setImages(files);
    }

    const submit = async () => {
        if (!images) {
            return;
        }
        const data = {
            images: images,
            userId: userData?.id,
            caption: caption
        } as IUploadImageData;

        await dispatch(uploadImages(data));
        dispatch(toggleAddImageModal())
    }

    return (
        <div className='modal-background'
            onClick={() =>
                dispatch(toggleAddImageModal())}>

            <div id='modal-container'
                onClick={(e) =>
                    e.stopPropagation()}>

                <button id='close-modal-button'
                    onClick={() =>
                        dispatch(toggleAddImageModal())}>
                    X
                </button>

                <div id='title'>
                    <h1>Add Images</h1>
                </div>

                <div id='body'>

                    <input
                        id='file-input'
                        type="file"
                        multiple
                        onChange={handleImages}
                    />

                    <input
                        type="text"
                        value={caption}
                        onChange={e => setCaption(e.target.value)}
                        placeholder='Caption..'
                    />

                </div>

                <div id='footer'>
                    <button id='upload-image'
                        onClick={submit}>
                        Upload Images
                    </button>
                </div>

            </div>
        </div >
    )
}
export default AddImageModal
