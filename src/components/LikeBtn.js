import React, { useState } from 'react';

import { toJson } from 'unsplash-js';

export function LikeBtn(props) {

    const [likeState, setLikeState] = useState(props.likedByUser);
    const [totalLikes, setTotalLikes] = useState(props.likes);

    const updateLikeState = () => {
        if (!props.authorized) {
            props.authorizeUser();
        } else {
            if (likeState) {
                props.unsplash.photos.unlikePhoto(props.id)
                    .then(toJson)
                    .then(json => {
                        setLikeState(false);
                        setTotalLikes(totalLikes - 1);
                    });
                
            } else {
                props.unsplash.photos.likePhoto(props.id)
                    .then(toJson)
                    .then(json => {
                        setLikeState(true);
                        setTotalLikes(totalLikes + 1);
                    });
            }
        }
    }

    return (
        <div className={props.className + " like"}>
            <p className="like__total-likes">{totalLikes}</p>

            <button
                className = {"like__btn js-like" + (likeState ? " like__btn--liked" : '')}
                onClick={() => {
                    updateLikeState()
                }}
            ></button>
        </div>
    );
};
