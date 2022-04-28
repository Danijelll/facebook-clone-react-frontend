export interface ICommentData {
    commentId: number,
    albumId: number,
    userId: number,
    username:string,
    profileImage:string,
    text: string,
    createdOn: Date,
}

export interface ICommentUploadData {
    albumId: number,
    userId: number,
    text: string,
}