import produce from 'immer';
import {handleActions} from 'redux-actions';
import userActions, {addToInviteListAction, addCurrentStepAction, removeFromInviteListAction} from '../actions/user.action';
import {IUserData} from "../types/user/user.types";

// empty userInvite list
export const initialState = {userInviteList: [], currentStep: 1};

export default handleActions<IUserData, any>(
    {
        [userActions.ADD_TO_INVITE_LIST]: produce((draft: IUserData, action: addToInviteListAction) => {
            draft.userInviteList.push(action.payload);
        }),

        [userActions.REMOVE_FROM_INVITE_LIST]: produce((state: IUserData, action: removeFromInviteListAction) => {
            console.log('asda:',action.payload);
            state.userInviteList = state.userInviteList.filter(userItem => userItem.uiId !== action.payload);
        }),

        [userActions.ADD_CURRENT_STEP]: produce((draft: IUserData, action: addCurrentStepAction) => {
            draft.currentStep = action.payload;
        }),
    },
    initialState
);
