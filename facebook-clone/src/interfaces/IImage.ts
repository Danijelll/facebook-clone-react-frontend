export interface IAddImage {
    userId: number,
    caption: string
}

export interface IUploadImageData {
    userId: number,
    caption: string,
    images: FileList
}

export interface ImageData{
    userId: number,
    imageUrl: string
}