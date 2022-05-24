import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../../features/store';
import { closeErrorModal } from '../../../features/Ui/UiSlice';
import './ErrorModal.scss'

function ErrorModal() {
    const dispatch = useDispatch();
    const errorData = useSelector((state: RootStore) => state.error.currentError);

    return (
        <div
            className='comment-modal-background'
            onClick={() => {
                dispatch(closeErrorModal());
            }}>

            <div
                id='error-modal-wrapper'
                onClick={(e) =>
                    e.stopPropagation()}>

                <h2 className='error-modal-title'>Error : {errorData?.errorStatus}</h2>
                <h2>{errorData?.errorMessage}</h2>

            </div>
        </div >
    )
}

export default ErrorModal