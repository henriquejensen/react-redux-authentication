import axios from "axios";

import { GITHUB_URL, SEARCH_USER, SEARCH_ERROR, LOGIN_SUCCESS } from "../constants/utils";

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
    return {
        type: LOGIN_SUCCESS,
        payload: "user"
    }
}