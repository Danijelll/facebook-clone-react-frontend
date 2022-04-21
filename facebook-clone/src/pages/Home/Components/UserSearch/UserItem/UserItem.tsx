import React from 'react'

interface UserItemProps {
    id: number,
    username: string,
    profileImage: string,
}

function UserItem(props: UserItemProps) {
    const { id, username, profileImage } = props;

    return (
        <div>
            <div>{id}</div>
            <div>{username}</div>
            <div>{profileImage}</div>
        </div>
    )
}

export default UserItem