export interface ILogin {
    username: string,
    password: string
}

export interface IRegister {
    username: string,
    email: string,
    password: string
}

export interface IUserData {
    id: number,
    username: string,
    profileImage: string,
    coverImage: string,
    isEmailConfirmed: boolean,
    createdOn: string
}

export interface IUserListData {
    id: number,
    username: string,
    profileImage: string,
}

export interface IUserUpdateProfileImageData {
    profileImage: File,
}

export interface IUserUpdateCoverImageData {
    coverImage: File,
}