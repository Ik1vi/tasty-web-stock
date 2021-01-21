import React from 'react';

export function Author(props) {
    return (
        <a className="publication__author author">
            <div className="author__img-wrapper">
                <img className="author__img" src="img/imgs/1.jpg"></img>
            </div>

            <h2 className="author__name">Василий</h2>
        </a>
    );
};
