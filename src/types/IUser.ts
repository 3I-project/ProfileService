export interface IUser {
    id_employee: number,
    id_organization: number,
    login: string,
    first_name: string,
    last_name: string,
    isLeader: boolean,
    avatarUrl?: string,
    reg_date: string
}

export interface IIdea {
    "id_idea": number,
    "id_organization": number,
    "id_employee": number,
    "title": string,
    "message_text": string,
    "type_id": number,
    "created": string,
    "author": IAuthor,
    "commentsCount": number,
    "type": string
}


export interface IAuthor {
    "first_name": string,
    "last_name": string,
    "isLeader": boolean,
    "avatarHash"?: string,
    "reg_date": string
}
