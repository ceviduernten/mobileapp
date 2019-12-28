import {combineReducers} from "redux";
import contactReducer from "./contactReducer";
import eventReducer from "./eventReducer";
import appointmentReducer from "./appointmentReducer";
import groupReducer from "./groupReducer";

const rootReducer = combineReducers({
    contacts: contactReducer as any,
    events : eventReducer as any,
    appointments : appointmentReducer as any,
    groups : groupReducer as any
});

export default rootReducer;