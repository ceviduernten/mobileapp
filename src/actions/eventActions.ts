import * as types from "./actionTypes";
import * as api from "../api/api";

function receiveEvents(data : any) {
    return {
        type : types.SET_EVENTS,
        data : data
    }
}

function receiveEventsError(errorMessage : string) {
    return {
        type : types.SET_EVENTS_ERROR,
        data : errorMessage
    }
}

function receiveSelectedEvent(event : object) {
    return {
        type : types.SET_EVENTS_SELECTED_OBJECT,
        data : event
    }
}

function clearSelectedObject() {
    return {
        type : types.SET_EVENTS_SELECTED_OBJECT,
        data : {}
    }
}

function changeState(state : string) {
    return {
        type : types.SET_EVENTS_CURRENT_STATE,
        data : state
    }
}

function getEventsFromAPI(dispatch : any) : any {
    dispatch(changeState("loading"));
    api.getEvents().then(function (res) {
        dispatch(receiveEvents(res));
    }).catch(function (error) {
        console.log(error);
        dispatch(receiveEventsError(error));
    });
}

export function setCurrentEvent(event : object) : any {
    return function (dispatch : any) {
        dispatch(receiveSelectedEvent(event));
    }
}

export function getEvents() : any {
    return function (dispatch : any) {
        getEventsFromAPI(dispatch);
    }
}
