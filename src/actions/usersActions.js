import axios from "axios";

import { GITHUB_URL, SEARCH_USER, SEARCH_ERROR, LOGIN_SUCCESS, LOG_OUT } from "../constants/utils";

export function searchUser(name) {
    return (dispatch) => {
            axios.get(GITHUB_URL + name)
                .then((response) => {
                    dispatch({
                        type: SEARCH_USER,
                        payload: response
                    })
                })
                .catch((error) => {
                    dispatch({type: SEARCH_ERROR})
                });
    }
}

export function login(name) {
    sessionStorage.setItem("token", 1234);
    return {
        type: LOGIN_SUCCESS,
    }
}

export function logOut() {
    console.log("log out")
    sessionStorage.removeItem("token");
    return {
        type: LOG_OUT,
    }
}