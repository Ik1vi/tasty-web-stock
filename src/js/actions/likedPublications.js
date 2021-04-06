import { CLEAR_LIKED_PUBLICATIONS, LIKED_PUBLICATIONS_REQUESTED, LIKED_PUB_ERROR, LIKED_PUB_IS_LOADING } from "../constants/action-types";

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
                        dispatch({ type: LIKED_PUB_ERROR, value: res.errors[0] });
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
    return { type: LIKED_PUB_IS_LOADING, value: isLoading }
}

export const clearLikedPublications = () => {
    return {type: CLEAR_LIKED_PUBLICATIONS}
}
