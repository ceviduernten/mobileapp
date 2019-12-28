import * as types from "./actionTypes";

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

const data = {"jungschar":[{"idContact":"e433c87b-3699-4cb0-b810-25dc3c0f06f1","firstName":"Urs","lastName":"Forrer","vulgo":"MIR","street":"B\u00FCelstrasse 16a","zip":"8635","city":"D\u00FCrnten","phone":"079 323 56 62","mail":"urs.forrer@ceviduernten.ch","type":1,"contactType":"JUNGSCHAR"},{"idContact":"980087b0-1718-4b0e-ac6a-7fb47c1c9e70","firstName":"Silja","lastName":"Nielsen","vulgo":"Tamina","street":"Wilfried-Heusser-Strasse 6","zip":"8632","city":"Tann","phone":"","mail":"silja.nielsen@ceviduernten.ch","type":1,"contactType":"JUNGSCHAR"},{"idContact":"c16ee8d7-9b35-4e5b-bc02-c3dac50ac9ca","firstName":"Anna","lastName":"Schweiter","vulgo":"Tatonka","street":"Tannackerstrasse 18","zip":"8632","city":"Tann","phone":"","mail":"anna.schweiter@ceviduernten.ch","type":1,"contactType":"JUNGSCHAR"}],"froeschli":[{"idContact":"98e8f222-e204-4d7b-a828-cac51a15c890","firstName":"Mirjam","lastName":"Gr\u00FCtter","vulgo":"Crescendo","street":"R\u00FCtlistrasse 10","zip":"8307","city":"Effretikon","phone":"","mail":"mirjam.gruetter@ceviduernten.ch","type":2,"contactType":"FROESCHLI"}],"verein":[{"idContact":"380f8717-051a-40f1-9f70-c0f8f1813d44","firstName":"Simon","lastName":"Boller","vulgo":"Chinchilla","street":"Sch\u00FCtzenstrasse 36","zip":"8400","city":"Winterthur","phone":"079 328 32 38","mail":"simon.boller@ceviduernten.ch","type":3,"contactType":"VEREIN"}]};


function getContactsFromAPI(dispatch : any) : any {
    dispatch(changeState("loading"));
    dispatch(receiveContacts(data));
    /*api.getContacts().then(function (res) {
        dispatch(receiveContacts(res));
    }).catch(function (error) {
        dispatch(receiveContactsError(error));
    });*/
}

export function getContacts() : any {
    return function (dispatch : any) {
        getContactsFromAPI(dispatch);
    }
}
