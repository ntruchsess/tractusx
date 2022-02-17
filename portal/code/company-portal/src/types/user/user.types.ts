
export interface IUserItem {
    email: string;
    role: string;
    personalNote: string;
}


export interface IUserData {
    userInviteList: IUserItem[];
    currentStep: number;
}


export interface IUserResponsibilities {
    id: number;
    eMail: string;
    role: string;
    message: string;
}

