export interface ILogin{
    username:string,
    password:string
}

export interface IRegister{
    username:string,
    email:string,
    password:string
}

export interface IUserData {
    id: number,
    username: string,
    profileImage: string,
    isEmailConfirmed: boolean,
    coverImage: string,
    createdOn: string
}