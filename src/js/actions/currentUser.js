import { AUTHORIZE_USER, CLEAR_CURRENT_USER, CURRENT_USER_REQUESTED } from "../constants/action-types";

import unsplash from '../api/index.js';
import { toJson } from 'unsplash-js';

export const getCurrentUser = () => {
    return function (dispatch) {
        unsplash.currentUser.profile()
            .then(toJson)
            .then(json => {
                dispatch({ type: CURRENT_USER_REQUESTED, currentUser: json.username })
            });
    }
}

export const clearCurrentUser = () => {
    return { type: CLEAR_CURRENT_USER }
}

export const authorizeUser = (code) => {
    return function (dispatch) {
        unsplash.auth.userAuthentication(code)
            .then(res =>
                res.json())
            .then(json => {
                localStorage.setItem('bearerToken', json.access_token);
                localStorage.setItem('authorized', true);
                dispatch({ type: AUTHORIZE_USER, bearerToken: json.access_token})
                location.assign('/');
            });
    }
}
