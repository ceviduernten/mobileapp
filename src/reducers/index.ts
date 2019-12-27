import {combineReducers} from "redux";
import contactReducer from "./contactReducer";
import eventReducer from "./eventReducer";

const rootReducer = combineReducers({
    contacts: contactReducer as any,
    events : eventReducer as any
});

export default rootReducer;