export interface IMessageData {
    id:number,
    senderId: string,
    receiverId: string,
    message1: string,
    createdOn: Date,
}

export interface ICreateMessageData {
    senderId: string,
    receiverId: string,
    message1: string,
}