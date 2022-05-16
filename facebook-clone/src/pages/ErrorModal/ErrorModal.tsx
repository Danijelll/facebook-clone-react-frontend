import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { toggleErrorModal } from '../../features/Ui/UiSlice';

function ErrorModal() {
    const dispatch = useDispatch();

    useEffect(() => {        
    }, [])

    return (
        <div
            className='comment-modal-background'
            onClick={() =>
                dispatch(toggleErrorModal())}>

            <div
                id='friend-request-wrapper'
                onClick={(e) =>
                    e.stopPropagation()}>

                <button id='close-modal-button'
                    onClick={() =>
                        dispatch(toggleErrorModal())}>
                    X
                </button>

            </div>
        </div >
    )
}

export default ErrorModal