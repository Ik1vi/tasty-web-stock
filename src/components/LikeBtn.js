import React, { useState } from 'react';

export function LikeBtn(props) {

    const [likedByUser, updateLikedByUser] = useState('false');

    const updateLikeState = () => {
        if(likedByUser==false) {
            fetch('https://api.unsplash.com/photos/' + props.id + '/like', {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Client-ID IclwidfyuuU2dcaoL9yAu4DQTfW1o8U1Uqx_kjkxrRE'
            })})
            .then((res) => {
                updateLikedByUser(true);
                console.log(likedByUser);
            })
            .catch(err => console.error(err))
        } else {
            fetch('https://api.unsplash.com/photos/' + props.id + '/like', {
            method: 'DELETE',
            headers: new Headers({
                'Authorization': 'Client-ID IclwidfyuuU2dcaoL9yAu4DQTfW1o8U1Uqx_kjkxrRE'
            })})
            .then((res) => {
                updateLikedByUser(false);
                console.log(likedByUser);
            })
            .catch(err => console.error(err))
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
