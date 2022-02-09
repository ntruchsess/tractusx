import {createAction} from 'redux-actions';
import {IUserItem} from "../types/user/user.types";

export enum UserActions {
    ADD_TO_INVITE_LIST = 'USER/ADD_TO_INVITE_LIST'
}

export const addToInviteList = createAction(UserActions.ADD_TO_INVITE_LIST, (userItem: IUserItem) => userItem);


export type addToInviteListAction = ReturnType<typeof addToInviteList>;


export default UserActions;
