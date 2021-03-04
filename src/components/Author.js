import React from 'react';

export function Author(props) {
    return (
        <a
            className={props.className + " author"}
            href={props.authorHref}
            target="_blank"
        >
            <div className="author__img-wrapper">
                <img
                    className="author__img"
                    src={props.authorImg}>
                </img>
            </div>

            <h2 className="author__name">
                {props.authorName}
            </h2>
        </a>
    );
}
