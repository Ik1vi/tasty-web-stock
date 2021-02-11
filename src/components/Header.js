import React from 'react';

import { ColorsMenu } from '../components/ColorsMenu.js';

export function Header(props) {
    const bodyEl = document.querySelector('.js-body');

    const [menuOpened, setMenuOpened] = React.useState(false);

    const toggleMenu = (ev) => {
        ev.preventDefault();

        setMenuOpened(!menuOpened);

        if (menuOpened) {
            bodyEl.classList.remove('colors-menu-open');
        } else {
            bodyEl.classList.add('colors-menu-open');
        }
    }

    const changeColorScheme = ev => {
        ev.preventDefault();

        bodyEl.classList.toggle('dark-scheme');
    };

    return (
        <header className="header js-header">
            <h1 className="visually-hidden">Красивые картинки на тему программирования</h1>

            <div className="header__bar-container">
                <div className="header__bg-color">
                    <div className="fixed-container">
                        <div className="header__bar">
                            <div className="header__logo logo">
                                <a className="logo__link" href="#"></a>
                            </div>
                            <button
                                className="header__colors-handle js-colors-handle"
                                type="button"
                                onClick={toggleMenu}>
                            </button>

                            <ul className="header__btn-list">
                                <li className="header__btn-item">
                                    <button
                                        className="header__btn btn btn--color-scheme js-btn-color-scheme"
                                        type="button"
                                        onClick={changeColorScheme}>
                                    </button>
                                </li>

                                <li className="header__btn-item">
                                    <button
                                        className="header__btn btn btn--likes js-btn-likes"
                                        type="button"
                                        onClick={() => {
                                                bodyEl.classList.add('liked-container-open', 'js-fixed');
                                            }
                                        }>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <ColorsMenu
                getPublications={props.getPublications}
                setColor={props.setColor}
                setPublications={props.setPublications}
                setPage={props.setPage}
                page={props.page}
            />
        </header>
    );
}