export interface IAddImage {
    userId: number,
    caption: string
}

export interface IUploadImageData {
    userId: number,
    caption: string,
    images: FileList
}

export interface IImageData{
    id: number
    userId: number
    caption:string
    createdOn:Date
    images:Array<File>
}