import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootStore } from '../../../../features/store';
import './AddImageModal.scss'

function AddImageModal({ closeModal }: { closeModal: any }) {

    const [images, setImages] = useState<FileList | null>(null);

    const userData = useSelector((state: RootStore) => state.user.currentUser);


    const handleImages = (e: React.FormEvent<HTMLInputElement>) => {
        const files = (e.target as HTMLInputElement).files;
        setImages(files);
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
                </div>

                <div id='footer'>
                    <button id='upload-image'>Upload Images</button>
                </div>

            </div>
        </div >
    )
}
export default AddImageModal
