import React, { useState } from 'react';

import { ColorsMenu } from '../components/ColorsMenu.js';
import { ColorsHandle } from '../components/ColorsHandleSvg.js';

export function Header(props) {
    const closeBtnAnimation = document.querySelectorAll('.close-colors');
    const openBtnAnimation = document.querySelectorAll('.open-colors');

    const [menuOpened, setMenuOpened] = useState(false);

    const closeMenu = () => {
        setMenuOpened(true);

        props.bodyEl.classList.remove('colors-menu-open');

        for (let i = 0; i < openBtnAnimation.length; i++) {
            openBtnAnimation[i].beginElement();
        }
    }

    const openMenu = () => {
        setMenuOpened(false);

        props.bodyEl.classList.add('colors-menu-open');

        for (let i = 0; i < closeBtnAnimation.length; i++) {
            closeBtnAnimation[i].beginElement();
        }
    }

    const toggleMenu = (ev) => {
        ev.preventDefault();

        if (menuOpened) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    const changeColorScheme = ev => {
        ev.preventDefault();

        props.bodyEl.classList.toggle('dark-scheme');
    };

    return (
        <header className="header js-header">
            <h1 className="visually-hidden">Красивые картинки на тему программирования</h1>

            <div className="header__bar-container">
                <div className="header__bg-color">
                    <div className="fixed-container">
                        <div className="header__bar">
                            <div className="header__logo logo">
                                <a
                                    className="logo__link"
                                    aria-label="Перейти к странице frontend разработчика Веселовой Ирины"
                                    href="http://tasty-web.ru.fozzyhost.com"
                                ></a>
                            </div>
                            <div
                                className="header__colors-handle colors-handle js-colors-handle">

                                <ColorsHandle></ColorsHandle>

                                <button
                                    id="startButton"
                                    className="colors-handle__btn"
                                    aria-label={(menuOpened ? "Закрыть цветовое меню" : "Открыть цветовое меню")}
                                    type="button"
                                    onClick={toggleMenu}>
                                </button>
                            </div>

                            <ul className={"header__btn-list" + (props.authorized ? " header__btn-list--authorized" : '')}>
                                <li className="header__btn-item">
                                    <a
                                        className="header__btn btn btn--personal"
                                        aria-label="Перейти к вашему профилю на сайте unsplash.com"
                                        title="Перейти к вашему профилю"
                                        href={"https://unsplash.com/" + props.currentUserName}
                                        target="_blank"
                                    >
                                    </a>
                                </li>

                                <li className="header__btn-item">
                                    <button
                                        className="header__btn btn btn--login"
                                        aria-label={(props.authorized ? "Сменить профиль" : "Авторизоваться")}
                                        type="button"
                                        title={(props.authorized ? "Сменить профиль" : "Авторизоваться")}
                                        onClick={() => {
                                            closeMenu();
                                            props.authorizeUser();
                                        }
                                        }>
                                    </button>
                                </li>

                                <li className="header__btn-item">
                                    <button
                                        className="header__btn btn btn--color-scheme js-btn-color-scheme"
                                        aria-label="Сменить цветовой режим"
                                        type="button"
                                        onClick={changeColorScheme}>
                                    </button>
                                </li>

                                <li className="header__btn-item">
                                    <button
                                        className="header__btn btn btn--likes js-btn-likes"
                                        aria-label="Перейти к отмеченным публикациям"
                                        type="button"
                                        onClick={() => {
                                            props.getLikedPublications();
                                            props.bodyEl.classList.add('liked-container-open', 'js-fixed');
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
