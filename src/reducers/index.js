import { combineReducers } from 'redux';
import users from "./reducer-user";
import session from "./reducer-session";

const rootReducer = combineReducers({
    session,
    users
});

export default rootReducer;