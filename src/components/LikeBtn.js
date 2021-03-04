import React, { useState } from 'react';

import { toJson } from 'unsplash-js';

export function LikeBtn(props) {
    const updateLikeState = () => {
        if (!props.authorized) {
            props.authorizeUser();
        } else {
            if (props.likeState) {
                props.unsplash.photos.unlikePhoto(props.id)
                    .then(toJson)
                    .then(json => {
                        props.setLikeState(false);
                        props.setTotalLikes(props.totalLikes - 1);
                    });
                
            } else {
                props.unsplash.photos.likePhoto(props.id)
                    .then(toJson)
                    .then(json => {
                        props.setLikeState(true);
                        props.setTotalLikes(props.totalLikes + 1);
                    });
            }
        }
    }

    return (
        <div className={props.className + " like"}>
            <p className="like__total-likes">{props.totalLikes}</p>

            <button
                className = {"like__btn js-like" + (props.likeState ? " like__btn--liked" : '')}
                onClick={() => {
                    updateLikeState()
                }}
            ></button>
        </div>
    );
};
