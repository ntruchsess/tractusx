
export interface IUserItem {
    uiId: string;
    email: string;
    role: string;
    personalNote: string;
}


export interface IUserData {
    userInviteList: IUserItem[];
    currentStep: number;
}


export interface IUserResponsibilities {
    uiId: number;
    eMail: string;
    role: string;
    message: string;
}

