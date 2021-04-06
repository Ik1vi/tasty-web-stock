import { CLEAR_PUBLICATIONS, PUBLICATIONS_REQUESTED, LIKE, DISLIKE, PUB_ERROR, PUB_IS_LOADING } from "../constants/action-types";

import unsplash from '../api/index.js';
import { toJson } from 'unsplash-js';

export const getPublications = (page, color) => {
    return function (dispatch) {
        dispatch(setLoading(true))

        let params = {
            query: 'programming electronic tech javascript laptop html',
            per_page: 10,
            page: page
        }

        unsplash.search.photos(params.query, params.page, params.per_page, color ? { color: color } : {})
            .then(toJson)
            .then(res => {
                if (res.errors) {
                    dispatch({ type: PUB_ERROR, value: res.errors[0] })
                    dispatch(setLoading(false))
                } else {
                    const feed = res;
                    const { total, results } = feed;

                    dispatch({ type: PUBLICATIONS_REQUESTED, publications: results, totalPages: total })
                    dispatch(setLoading(false))
                }
            });
    }
}

export const setLoading = (isLoading) => {
    return { type: PUB_IS_LOADING, value: isLoading }
}

export const clearPublications = () => {
    return { type: CLEAR_PUBLICATIONS }
}

export const dislike = (id) => {
    return function (dispatch) {
        unsplash.photos.unlikePhoto(id)
            .then(toJson)
            .then(() => {
                dispatch({
                    type: DISLIKE,
                    pubId: id,
                    liked: false,
                })
            });
    }
}

export const like = (id) => {
    return function (dispatch) {
        unsplash.photos.likePhoto(id)
            .then(toJson)
            .then(() => {
                dispatch({
                    type: LIKE,
                    pubId: id,
                    liked: true,
                })
            });
    }
}
