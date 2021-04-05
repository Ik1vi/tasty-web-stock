import { CLEAR_LIKED_PUBLICATIONS, ERROR, IS_LOADING, LIKED_PUBLICATIONS_REQUESTED } from "../constants/action-types";

import unsplash from '../api/index.js';
import { toJson } from 'unsplash-js';

export const getLikedPublications = (currentUser) => {
    return function (dispatch) {
        if (currentUser) {
            dispatch(setLoading(true))
            unsplash.users.likes(currentUser)
                .then(toJson)
                .then(res => {
                    if (res.errors) {
                        dispatch({ type: ERROR, value: res.errors[0] });
                        dispatch(setLoading(false))
                    } else {
                        dispatch({ type: LIKED_PUBLICATIONS_REQUESTED, likedPublications: res })
                        dispatch(setLoading(false));
                    }
                })
        }
    }
}

export const setLoading = (isLoading) => {
    return { type: IS_LOADING, value: isLoading }
}

export const clearLikedPublications = () => {
    return {type: CLEAR_LIKED_PUBLICATIONS}
}
