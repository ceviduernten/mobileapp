import * as types from "./actionTypes";
import * as api from "../api/api";

function receiveAppointment(data : any) {
    console.log(data);
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

const data = {"idAppointment":"1936a994-840f-4fb3-a365-a3c68b496048","date":"0001-01-01T00:00:00","time":"14.00 bis 17.00 Uhr","location":"Pfarrhaus D\u00FCrnten, Oberd\u00FCrnterstrasse 6, 8635 D\u00FCrnten","infos":"Bababababababababababababababab","groupId":"6740d41a-10e4-4434-9efa-41a8ac21af2b","group":null};
function getAppointmentOfGroupFromAPI(dispatch : any, group : string) : any {
    dispatch(changeState("loading"));
    dispatch(receiveAppointment(data));
    /*api.getGroups().then(function (res) {
        dispatch(receiveGroups(res));
    }).catch(function (error) {
        dispatch(receiveGroupsError(error));
    });*/
}

export function getAppointmentOfGroup(group : string) : any {
    return function (dispatch : any) {
        getAppointmentOfGroupFromAPI(dispatch, group);
    }
}
