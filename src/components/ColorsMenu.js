import React, { useContext } from 'react';

import { ColorsMenuItem } from '../components/ColorsMenuItem.js';
import { ColorContext } from '../context/index.js';

export function ColorsMenu(props) {
    const colors = ["white", "black", "yellow", "orange", "red", "purple", "magenta", "green", "teal", "blue"];

    const [colorContext, setColorContext] = useContext(ColorContext);

    const selectColor = (color, e) => {
        e.preventDefault();

        props.setPublications([]);
        props.setPage(1);

        (colorContext === color
            ? setColorContext(null)
            : setColorContext(color)
        )
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
                            aria-label="Перейти на сайт unsplash.com"
                            href="https://unsplash.com/"
                            target="_blank">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
