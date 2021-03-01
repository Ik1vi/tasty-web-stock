import React, { useState } from 'react';

import { ColorsMenu } from '../components/ColorsMenu.js';
import { ColorsHandle } from '../components/ColorsHandleSvg.js';


export function Header(props) {
    const bodyEl = document.querySelector('.js-body');
    const closeBtnAnimation = document.querySelectorAll('.close-colors');
    const openBtnAnimation = document.querySelectorAll('.open-colors');

    const [menuOpened, setMenuOpened] = useState(false);

    const toggleMenu = (ev) => {
        ev.preventDefault();

        setMenuOpened(!menuOpened);

        if (menuOpened) {
            bodyEl.classList.remove('colors-menu-open');

            for (let i = 0; i < openBtnAnimation.length; i++) {
                openBtnAnimation[i].beginElement();
            }
        } else {
            bodyEl.classList.add('colors-menu-open');

            for (let i = 0; i < closeBtnAnimation.length; i++) {
                closeBtnAnimation[i].beginElement();
            }
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
                            <div
                                className="header__colors-handle colors-handle js-colors-handle">

                                <ColorsHandle></ColorsHandle>

                                <button
                                    id="startButton"
                                    className="colors-handle__btn"
                                    type="button"
                                    onClick={toggleMenu}>
                                </button>
                            </div>

                            <ul className={"header__btn-list" + (props.authorized ? " header__btn-list--authorized" : '')}>
                                <li className="header__btn-item">
                                    <a
                                        className="header__btn btn btn--personal"
                                        type="button"
                                        href={"https://unsplash.com/" + props.currentUsername}
                                        target="_blank"
                                        >
                                    </a>
                                </li>

                                <li className="header__btn-item">
                                    <button
                                        className="header__btn btn btn--login"
                                        type="button"
                                        title={(props.authorized ? "Сменить профиль" : "Авторизоваться")}
                                        onClick={() => {
                                                props.authorizeUser();
                                            }
                                        }>
                                    </button>
                                </li>

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