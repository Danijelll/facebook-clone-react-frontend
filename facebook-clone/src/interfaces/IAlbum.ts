import { ImageData } from "./IImage"

export interface IAlbumData {
    id: number
    userId: number
    caption: string
    createdOn: Date
    images: ImageData[]
}

export interface IAlbumUpdateData {
    id: number
    caption: string
}

export interface IAlbumWithUserData {
    id: number
    userId: number
    username: string
    userProfileImageUrl: string
    caption: string
    createdOn: Date
    images: ImageData[]
}