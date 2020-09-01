import * as types from "./actionTypes";
import * as api from "../api/api";


function receiveAppointment(data : any) {
    return {
        type : types.SET_APPOINTMENTS,
        data : data
    }
}

function receiveAppointmentError(errorMessage : string) {
    return {
        type : types.SET_APPOINTMENTS_ERROR,
        data : errorMessage
    }
}

function clearAppointment() {
    return {
        type : types.SET_APPOINTMENTS_CLEAR,
        data : {}
    }
}

function changeState(state : string) {
    return {
        type : types.SET_APPOINTMENTS_CURRENT_STATE,
        data : state
    }
}

function getAppointmentOfGroupFromAPI(dispatch : any, group : string) : any {
    dispatch(changeState("loading"));
    api.getNextAppointmentOfGroup(group).then(function (res) {
        dispatch(receiveAppointment(res));
    }).catch(function (error) {
        dispatch(receiveAppointmentError(error));
    });
}

function signOnForAppointment(dispatch : any, values : any) : any {
    dispatch(changeState("loading"));
    api.signOnForAppointment(values).then(function (res) {
        dispatch(changeState("success_signon"));
    }).catch(function (error) {
        dispatch(receiveAppointmentError(error));
    });
}

function signOffForAppointment(dispatch : any, values : any) : any {
    dispatch(changeState("loading"));
    api.signOffForAppointment(values).then(function (res) {
        dispatch(changeState("success_signoff"));
    }).catch(function (error) {
        dispatch(receiveAppointmentError(error));
    });
}

export function getAppointmentOfGroup(group : string) : any {
    return function (dispatch : any) {
        getAppointmentOfGroupFromAPI(dispatch, group);
    }
}

export function signOff(values : any) : any {
    return function (dispatch : any) {
        signOffForAppointment(dispatch, values);
    }
}

export function signOn(values : any) : any {
    return function (dispatch : any) {
        signOnForAppointment(dispatch, values);
    }
}
