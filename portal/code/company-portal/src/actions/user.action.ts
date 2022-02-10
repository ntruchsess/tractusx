import {createAction} from 'redux-actions';
import {IUserItem} from "../types/user/user.types";

export enum UserActions {
    ADD_TO_INVITE_LIST = 'USER/ADD_TO_INVITE_LIST',
    ADD_CURRENT_STEP = 'ADD_CURRENT_STEP'
}

export const addToInviteList = createAction(UserActions.ADD_TO_INVITE_LIST, (userItem: IUserItem) => userItem);
export const addCurrentStep = createAction(UserActions.ADD_CURRENT_STEP, (step: number) => step);



export type addToInviteListAction = ReturnType<typeof addToInviteList>;
export type addCurrentStepAction = ReturnType<typeof addCurrentStep>;


export default UserActions;
