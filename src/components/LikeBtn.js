import React, { useState } from 'react';

import { toJson } from 'unsplash-js';

export function LikeBtn(props) {

    const [likeState, setLikeState] = useState(props.likedByUser)

    const updateLikeState = () => {
        if (!props.authorized) {
            props.authorizeUser();
        } else {
            if (likeState) {
                props.unsplash.photos.unlikePhoto(props.id)
                    .then(toJson)
                    .then(json => {
                        console.log(json);
                        setLikeState(false)
                    });
                
            } else {
                props.unsplash.photos.likePhoto(props.id)
                    .then(toJson)
                    .then(json => {
                        console.log(json)
                        setLikeState(true)
                    });
                
            }
        }
    }

    return (
        <div className={props.className + " like"}>
            <p className="like__total-likes">{props.likes}</p>

            <button
                className="like__btn"
                onClick={() => {
                    updateLikeState()
                }}
            ></button>
        </div>
    );
};
