import produce from 'immer';
import {handleActions} from 'redux-actions';
import userActions, {addToInviteListAction, addCurrentStepAction, removeFromInviteListAction, addCompanyDataAction} from '../actions/user.action';
import { CompanyDetailsData } from '../data/companyDetails';
import {IUserData} from "../types/user/user.types";

// empty userInvite list
export const initialState = {userInviteList: [], currentStep: 1, companyData: new CompanyDetailsData()};

export default handleActions<IUserData, any>(
    {
        [userActions.ADD_TO_INVITE_LIST]: produce((state: IUserData, action: addToInviteListAction) => {
            state.userInviteList.push(action.payload);
        }),

        [userActions.REMOVE_FROM_INVITE_LIST]: produce((state: IUserData, action: removeFromInviteListAction) => {
            console.log('asda:',action.payload);
            state.userInviteList = state.userInviteList.filter(userItem => userItem.uiId !== action.payload);
        }),

        [userActions.ADD_CURRENT_STEP]: produce((state: IUserData, action: addCurrentStepAction) => {
            state.currentStep = action.payload;
        }),

        [userActions.ADD_COMPANY_DATA]: produce((state: IUserData, action: addCompanyDataAction) => {
            state.companyData = action.payload;
        }),
        
    },
    initialState
);
