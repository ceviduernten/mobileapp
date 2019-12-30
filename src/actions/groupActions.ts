import * as types from "./actionTypes";
import * as api from "../api/api";

function receiveGroups(data : any) {
    return {
        type : types.SET_GROUPS,
        data : data
    }
}

function receiveGroupsError(errorMessage : string) {
    return {
        type : types.SET_GROUPS_ERROR,
        data : errorMessage
    }
}

function receiveSelectedGroup(group : object) {
    return {
        type : types.SET_GROUPS_SELECTED_OBJECT,
        data : group
    }
}

function clearSelectedObject() {
    return {
        type : types.SET_GROUPS_SELECTED_OBJECT,
        data : {}
    }
}

function changeState(state : string) {
    return {
        type : types.SET_GROUPS_CURRENT_STATE,
        data : state
    }
}

function getGroupsFromAPI(dispatch : any) : any {
    dispatch(changeState("loading"));
    api.getGroups().then(function (res) {
        dispatch(receiveGroups(res));
    }).catch(function (error) {
        dispatch(receiveGroupsError(error));
    });
}

export function setCurrentGroup(group : object) : any {
    return function (dispatch : any) {
        dispatch(receiveSelectedGroup(group));
    }
}

export function getGroups() : any {
    return function (dispatch : any) {
        getGroupsFromAPI(dispatch);
    }
}
