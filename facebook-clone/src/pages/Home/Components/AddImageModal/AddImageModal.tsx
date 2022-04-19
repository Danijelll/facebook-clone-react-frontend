import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uploadImages } from '../../../../features/Images/ImageSlice';
import { RootStore, store } from '../../../../features/store';
import { IAddImage, IUploadImageData } from '../../../../interfaces/IImage';
import './AddImageModal.scss'

function AddImageModal({ closeModal }: { closeModal: any }) {

    const dispatch = useDispatch();
    const [images, setImages] = useState<FileList | null>(null);
    const [caption, setCaption] = useState<string>('');

    const userData = useSelector((state: RootStore) => state.user.currentUser);
    
    
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
    }


    return (
        <div className='modal-background' onClick={() => closeModal(false)}>
            <div id='modal-container' onClick={(e) => e.stopPropagation()}>
                <button id='close-modal-button' onClick={() => closeModal(false)}> X </button>

                <div id='title'>
                    <h1>Add Images</h1>
                </div>

                <div id='body'>
                    <input id='file-input' type="file" multiple onChange={handleImages} />
                    <input type="text" value={caption} onChange={e => setCaption(e.target.value)} placeholder='Caption..'/>
                </div>

                <div id='footer'>
                    <button id='upload-image' onClick={submit}>Upload Images</button>
                </div>

            </div>
        </div >
    )
}
export default AddImageModal
