export interface IMessageData {
    id:number,
    sender: string,
    receiver: string,
    message: string,
    createdOn: Date,
}

export interface ICreateMessageData {
    sender: string,
    receiver: string,
    message: string,
}