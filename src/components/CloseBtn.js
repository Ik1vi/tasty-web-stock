import React from 'react';

export function CloseBtn(props) {
    return (
        <button
            className={props.className + " btn-close js-btn-close"}
            type="button"
            aria-label="Закрыть форму"
            onClick={() => {
                props.bodyEl.classList.remove('picture-container-open', 'liked-container-open', 'js-fixed');
                props.setPicContainerIsOpen(false);
                props.setPicContainerIsVisible(false)
            }}>
        </button>
    )
}
