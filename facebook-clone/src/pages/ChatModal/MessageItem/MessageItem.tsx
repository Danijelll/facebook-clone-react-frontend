import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../../features/store';

interface MessageItemProps {
    id: number,
    sender: string,
    receiver: string,
    message: string,
    createdOn: Date,
}

function MessageItem(props: MessageItemProps) {
    const userData = useSelector((state: RootStore) => state.user.currentUser);
    const { id, sender, receiver, message, createdOn } = props;

    return (
        <div>
            {id}
            {sender}
            {receiver}
            {message}
            {createdOn}
        </div>
    )
}

export default MessageItem