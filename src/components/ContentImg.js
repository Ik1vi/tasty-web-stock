import React from 'react';

export function ContentImg(props) {
    return (
        <img
            className="publication__content-img content-img"
            src={props.img}
            >
        </img>
    );
};