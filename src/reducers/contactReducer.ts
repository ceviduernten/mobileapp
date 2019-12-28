import * as types from "../actions/actionTypes";
import {IAction} from "../interfaces/actions";

interface ContactReducerState {
    state: string,
    errorMessage: string,
    data: object
}

const defaultState = {
    data: {},
    state: "success",
    errorMessage: "",
    selectedObject: {}
};

const contactReducer = (state : ContactReducerState = defaultState, action: IAction) => {
    switch (action.type) {
        case types.SET_CONTACTS_CURRENT_STATE:
            return {...state, state: action.data};
        case types.SET_CONTACTS_ERROR:
            return {...state, errorMessage: action.data, data: {}, state: "error"};
        case types.SET_CONTACTS:
            return Object.assign({}, state, {
                data: action.data,
                state: "success"
            });
        default:
            return state;
    }
};

export default contactReducer;
