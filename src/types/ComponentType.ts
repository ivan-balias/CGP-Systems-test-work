export enum IconVariants {
    "image" ,
    "paragraph",
    "headline"
}


export type CustomComponentType = {
    name: string,
    icon: IconVariants,
    tag: string,
}

export type CompleteComponentType = {
    id:string,
    content: string,
    active: boolean,
    order: number
} & CustomComponentType