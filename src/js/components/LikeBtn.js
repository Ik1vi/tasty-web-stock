import React from 'react';

import unsplash from '../api/index.js';
import { toJson } from 'unsplash-js';

export function LikeBtn(props) {
    const updateLikeState = () => {
        if (!props.authorized) {
            props.authorizeUser();
        } else {
            if (props.likeState) {
                unsplash.photos.unlikePhoto(props.id)
                    .then(toJson)
                    .then( () => {
                        props.setLikeState(false);
                        props.setTotalLikes(props.totalLikes - 1);
                    });

            } else {
                unsplash.photos.likePhoto(props.id)
                    .then(toJson)
                    .then( () => {
                        props.setLikeState(true);
                        props.setTotalLikes(props.totalLikes + 1);
                        dispatch({type: "LIKE_EVENT", pubId: props.id})
                    });
            }
        }
    }

    return (
        <div className={props.className + " like"}>
            <p className="like__total-likes">{props.totalLikes}</p>

            <button
                className={"like__btn js-like" + (props.likeState ? " like__btn--liked" : '')}
                aria-label={(props.likeState ? "Отметить публикацию" : 'Снять отметку с публикации')}
                type="button"
                onClick={() => {
                    updateLikeState()
                }}
            ></button>
        </div>
    );
}
