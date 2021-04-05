import { CLEAR_CURRENT_USER, CURRENT_USER_REQUESTED } from "../constants/action-types";

import unsplash from '../api/index.js';
import { toJson } from 'unsplash-js';

export const getCurrentUser = () => {
    return function (dispatch) {
        unsplash.currentUser.profile()
        .then(toJson)
        .then(json => {
            console.log(json.username);
            dispatch({ type: CURRENT_USER_REQUESTED, currentUser: json.username })
        });
    }
}

export const clearCurrentUser = () => {
    return {type: CLEAR_CURRENT_USER}
}
