import * as types from "../actions/actionTypes";
import {IAction} from "../interfaces/actions";

interface AppointmentReducerState {
    state: string,
    errorMessage: string,
    data: object
}

const defaultState = {
    data: {},
    state: "success",
    errorMessage: ""
};

const appointmentReducer = (state : AppointmentReducerState = defaultState, action: IAction) => {
    switch (action.type) {
        case types.SET_APPOINTMENTS_CURRENT_STATE:
            return {...state, state: action.data};
        case types.SET_APPOINTMENTS_ERROR:
            return {...state, errorMessage: action.data, data: [], state: "error"};
        case types.SET_APPOINTMENTS_CLEAR:
            return {...state, data : {}, state: "success"};
        case types.SET_APPOINTMENTS:
            return {...state, data : action.data, state: "success"};
        default:
            return state;
    }
};

export default appointmentReducer;
