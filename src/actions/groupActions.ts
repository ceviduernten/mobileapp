import * as types from "./actionTypes";

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

const data = [{"idGroup":"6740d41a-10e4-4434-9efa-41a8ac21af2b","name":"Sparrows","description":"Test Group","leaders":"Astra, Fux, Rabbit, Renard und MIR","mail":null},{"idGroup":"8d686ed7-b114-4039-af2e-be925b105d0e","name":"Olchis","description":"Bababababababababababababababab","leaders":"Chips, Zeus, Speedy und Cham\u00E4leon","mail":null},{"idGroup":"82d4911b-876b-4aff-a085-567085055c0e","name":"Haitikis","description":"Bababababababababababababababab","leaders":"Tatonka, Laurea und Abeya","mail":null},{"idGroup":"a75beddf-b442-43f6-877a-081002d2a57e","name":"Hokulani","description":"Bababababababababababababababab","leaders":"Xing und Kiku","mail":null},{"idGroup":"fb7ee830-0c26-4f3e-b4e4-552f26a2c331","name":"Bergl\u00F6wen","description":"Bababababababababababababababab","leaders":"Goblin","mail":null},{"idGroup":"59cb180f-f3e3-45ec-8469-34cba393c18e","name":"Grizzlys","description":"Bababababababababababababababab","leaders":"Ra, Thor und Kronos","mail":null},{"idGroup":"708dc4ec-11da-43e6-886e-d72a964ed8ff","name":"Kyoshis","description":"Bababababababababababababababab","leaders":"Tatonka, Laurea und Nerina","mail":null},{"idGroup":"4dd637ea-2339-4355-8f83-9afa84b3aa44","name":"Snoopys","description":"Bababababababababababababababab","leaders":"Tamina","mail":null},{"idGroup":"fbf1bbbb-708a-4ad5-87d9-0435466b8813","name":"Raptors","description":"Bababababababababababababababab","leaders":"Ajax","mail":null}];

function getGroupsFromAPI(dispatch : any) : any {
    dispatch(changeState("loading"));
    dispatch(receiveGroups(data));
    /*api.getGroups().then(function (res) {
        dispatch(receiveGroups(res));
    }).catch(function (error) {
        dispatch(receiveGroupsError(error));
    });*/
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
