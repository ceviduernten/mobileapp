import * as types from "./actionTypes";
import * as api from "../api/api";

function receiveContacts(data : any) {
    return {
        type : types.SET_CONTACTS,
        data : data
    }
}

function receiveContactsError(errorMessage : string) {
    return {
        type: types.SET_CONTACTS_ERROR,
        data: errorMessage
    }
}

function changeState(state : string) {
    return {
        type : types.SET_CONTACTS_CURRENT_STATE,
        data : state
    }
}

function getContactsFromAPI(dispatch : any) : any {
    dispatch(changeState("loading"));
    api.getContacts().then(function (res) {
        dispatch(receiveContacts(res));
    }).catch(function (error) {
        console.log(error);
        dispatch(receiveContactsError(error));
    });
}

export function getContacts() : any {
    return function (dispatch : any) {
        getContactsFromAPI(dispatch);
    }
}
