import produce from 'immer';
import {handleActions} from 'redux-actions';
import userActions, {addToInviteListAction} from '../actions/user.action';
import {IUserInviteList} from "../types/user/user.types";

// empty userInvite list
export const initialState = {userInviteList: []};

export default handleActions<IUserInviteList, any>(
    {
        [userActions.ADD_TO_INVITE_LIST]: produce((draft: IUserInviteList, action: addToInviteListAction) => {
            draft.userInviteList.push(action.payload);
        }),
    },
    initialState
);
