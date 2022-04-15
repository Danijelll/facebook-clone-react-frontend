import React, { useEffect, useRef, useState } from 'react'
import './AddImageModal.scss'

function AddImageModal({ closeModal }: { closeModal: any }) {

    
    return (
        <div className='modal-backgorund' onClick={() => closeModal(false)}>
            <div id='modal-container' onClick={(e) => e.stopPropagation()}>
                <button id='close-modal-button' onClick={() => closeModal(false)}> X </button>

                <div id='title'>
                    <h1>Add Images</h1>
                </div>

                <div id='body'>
                    <input type="file" multiple name="" id="" />
                </div>

                <div id='footer'>
                </div>

            </div>
        </div>
    )
}

export default AddImageModal

function listenForOutsideClick(listening: boolean, setListening: React.Dispatch<React.SetStateAction<boolean>>, menuRef: React.MutableRefObject<null>, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>): React.EffectCallback {
    throw new Error('Function not implemented.');
}
