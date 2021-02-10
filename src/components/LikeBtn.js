import React from 'react';

export function LikeBtn(props) {
    const getHeight = (e) => e.target.getBoundingClientRect().height;

    return (
        <div className={props.className + " like"}>
            <p className="like__total-likes">{props.likes}</p>

            <button className="like__btn"></button>
        </div>
    );
};
