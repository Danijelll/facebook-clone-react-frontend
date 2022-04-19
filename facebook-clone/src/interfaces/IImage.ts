export interface IAddImage {
    userId: number,
    caption: string
}

export interface IUploadImageData {
    userId: number,
    caption: string,
    images: FileList
}