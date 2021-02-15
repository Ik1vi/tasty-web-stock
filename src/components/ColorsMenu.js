import React from 'react';

import { ColorsMenuItem } from '../components/ColorsMenuItem.js';

export function ColorsMenu(props) {

    const colors = ["white", "black", "yellow", "orange", "red", "purple", "magenta", "green", "teal", "blue"];

    const selectColor = (color, e) => {
        e.preventDefault();

        props.setPublications([]);
        props.setPage(1);

        const headerEl = document.querySelector('.js-header');
        let colorClass = "colors-menu-" + color;

        if (headerEl.classList.contains(colorClass)) {
            headerEl.classList.remove(colorClass);
            props.setColor(null);
        } else {
            for (let i = 0; i < colors.length; i++) {
                let headerColorClass = "colors-menu-" + colors[i];
                headerEl.classList.remove(headerColorClass);
                props.setColor(color);
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

                    <li className={"colors-menu__item colors-menu__item--unsplash"}>
                        <a
                            className={"colors-menu__btn colors-menu__btn--unsplash"}
                            type="button"
                            href="https://unsplash.com/"
                            target="_blank">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};