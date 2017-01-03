import { browserHistory } from 'react-router'
import { LOGIN_SUCCESS, LOG_OUT } from "../constants/utils";

export default function(state=sessionStorage.token, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            browserHistory.push("/dashboard")
            return !!sessionStorage.token;

        case LOG_OUT:
            browserHistory.push("/")
            return !!sessionStorage.token;

        default:
            return state;
        
    }

}