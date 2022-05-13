export interface ICommentData {
    id: number,
    albumId: number,
    userId: number,
    username: string,
    profileImage: string,
    text: string,
    createdOn: Date,
}

export interface ICommentUploadData {
    albumId: number,
    userId: number,
    text: string,
}

export interface IAlbumCommentPageData {
    albumId: number,
    page: number,
}

export interface ICommentUpdateData {
    id: number,
    albumId: number,
    text: string,
}