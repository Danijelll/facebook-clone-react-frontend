export interface IMessageData {
    id:number,
    senderId: string,
    receiverId: string,
    message: string,
    createdOn: Date,
}

export interface ICreateMessageData {
    senderId: string,
    receiverId: string,
    message: string,
}