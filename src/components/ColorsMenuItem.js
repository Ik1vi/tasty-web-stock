import React from 'react';

export function ColorsMenuItem(props) {
    return (
        <li className={"colors-menu__item colors-menu__item--" + props.color}>
            <button
                className={"colors-menu__btn colors-menu__btn--" + props.color}
                type="button"
                onClick={(e) => props.selectColor(props.color, e)}>
            </button>
        </li>
    );
};