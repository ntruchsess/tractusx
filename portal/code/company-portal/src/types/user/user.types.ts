
export interface IUserItem {
    email: string;
    role: string;
    personalNote: string;
}

export interface IUserInviteList {
    userInviteList: IUserItem[]
}

export interface IUserResponsibilities {
    id: number;
    eMail: string;
    role: string;
    message: string;
}

