import React from 'react';

import { ColorsMenuItem } from '../components/ColorsMenuItem.js';

export function ColorsMenu(props) {

    const colors = ["white", "black", "yellow", "orange", "red", "purple", "magenta", "green", "teal", "blue", "unsplash"];

    const selectColor = (color, e) => {
        e.preventDefault();
        
        const headerEl = document.querySelector('.js-header');
        let colorClass = "colors-menu-" + color;

        if (headerEl.classList.contains(colorClass)) {
            headerEl.classList.remove(colorClass);
            props.getPublications();
        } else {
            for (let i = 0; i < colors.length; i++) {
                let headerColorClass = "colors-menu-" + colors[i];
                headerEl.classList.remove(headerColorClass);
                props.getPublications(color);
            }
            headerEl.classList.add(colorClass);
        }
    };

    return (
        <div className="header__colors-menu colors-menu">
            <div className="fixed-container">
                <ul className="colors-menu__list js-colors-list">
                    {colors.map((color, i) =>
                        <ColorsMenuItem
                            color={color}
                            key={i}
                            selectColor={selectColor}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
};