import React from 'react';

export function Author(props) {
    return (
        <a className="publication__author author">
            <div className="author__img-wrapper">
                <img
                    className="author__img"
                    src={props.authorImg}>
                </img>
            </div>

            <h2 className="author__name">{props.authorName}</h2>
        </a>
    );
};
