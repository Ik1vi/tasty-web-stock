import React from 'react';

export function CloseBtn(props) {
    return (
        <button
            className={props.className + " btn-close js-btn-close"}
            type="button"
            aria-label="Закрыть форму"
            onClick={() => {
                document.body.classList.remove('js-fixed');
                
                props.setLikedContainerIsOpen(false);
                props.setPicContainerIsOpen(false);
                props.setPicContainerIsVisible(false)
            }}>
        </button>
    )
}
