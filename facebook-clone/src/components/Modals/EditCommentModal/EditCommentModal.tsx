import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../../features/Comments/CommentSlice';
import { RootStore } from '../../../features/store';
import { toggleEditCommentModal } from '../../../features/Ui/UiSlice';

function EditCommentModal() {
    const currentOpenComment = useSelector((state: RootStore) => state.comment.currentOpenComment);
    const currentOpenAlbum = useSelector((state: RootStore) => state.album.currentOpenAlbum);
    const [commentText, setCommentText] = useState(currentOpenAlbum?.caption)
    const dispatch = useDispatch();

    const handleEdit = async () => {
        await dispatch(updateComment(commentUpdateData))
        dispatch(toggleEditCommentModal())
    }

    const commentUpdateData = {
        id: currentOpenComment?.id,
        albumId: currentOpenComment?.albumId,
        text: commentText
    }

    return (
        <div className='modal-background'
            onClick={() =>
                dispatch(toggleEditCommentModal())}>

            <div id='image-menu-modal-container'
                onClick={(e) =>
                    e.stopPropagation()}>

                <button id='image-menu-close-modal-button'
                    onClick={() =>
                        dispatch(toggleEditCommentModal())}>
                    X
                </button>

                <div id='body'>
                    <input
                        id='edit-image-modal-input'
                        onChange={e => setCommentText(e.target.value)}
                        type="text"
                        placeholder={currentOpenComment?.text}
                    />

                    <button
                        id='edit-image-modal-edit-button'
                        onClick={() => handleEdit()}>
                        Edit comment text
                    </button>

                    <button id='edit-image-modal-cancel-button'>
                        Cancel</button>
                </div>

            </div>
        </div >
    )
}

export default EditCommentModal