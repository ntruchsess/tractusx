import {createAction} from 'redux-actions';
import {IUserItem} from "../types/user/user.types";

export enum UserActions {
    ADD_TO_INVITE_LIST = 'USER/ADD_TO_INVITE_LIST',
    REMOVE_FROM_INVITE_LIST = 'USER/REMOVE_FROM_INVITE_LIST',
    ADD_CURRENT_STEP = 'USER/ADD_CURRENT_STEP',
}

export const addToInviteList = createAction(UserActions.ADD_TO_INVITE_LIST, (userItem: IUserItem) => userItem);
export const removeFromInviteList = createAction(UserActions.REMOVE_FROM_INVITE_LIST, (userUiId: string) => userUiId);
export const addCurrentStep = createAction(UserActions.ADD_CURRENT_STEP, (step: number) => step);



export type addToInviteListAction = ReturnType<typeof addToInviteList>;
export type removeFromInviteListAction = ReturnType<typeof removeFromInviteList>;
export type addCurrentStepAction = ReturnType<typeof addCurrentStep>;


export default UserActions;
