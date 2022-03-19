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
