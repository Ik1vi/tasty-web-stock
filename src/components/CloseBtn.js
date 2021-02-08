import React from 'react';

export function CloseBtn(props) {
    return (
        <button
            className="picture-container__btn-close btn-close js-btn-close"
            type="button"
            aria-label="Закрыть форму"
            onClick={props.picContainerHandler}>
        </button>
    )
}