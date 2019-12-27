import * as types from "../actions/actionTypes";
import {IAction} from "../interfaces/actions";

interface EventReducerState {
    state: string,
    errorMessage: string,
    data: any[],
    selectedObject: object
}

const defaultState = {
    data: [],
    state: "success",
    errorMessage: "",
    selectedObject: {}
};

const eventReducer = (state : EventReducerState = defaultState, action: IAction) => {
    switch (action.type) {
        case types.SET_EVENTS_CURRENT_STATE:
            return {...state, state: action.data};
        case types.SET_EVENTS_ERROR:
            return {...state, errorMessage: action.data, data: [], state: "error"};
        case types.SET_EVENTS_SELECTED_OBJECT:
            return {...state, selectedObject : action.data};
        case types.SET_EVENTS:
            return Object.assign({}, state, {
                data: action.data,
                state: "success"
            });
        default:
            return state;
    }
};

export default eventReducer;