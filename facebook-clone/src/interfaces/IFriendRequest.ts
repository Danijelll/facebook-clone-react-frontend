export interface IFriendRequest {
    id: number,
    firstUserId: number,
    secondUserId: number,
    isAccepted: boolean,
    createdOn: Date,
}