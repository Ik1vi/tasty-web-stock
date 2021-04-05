import React, { useContext } from 'react';

import { connect } from 'react-redux';

import { ColorsMenu } from '../components/ColorsMenu.js';
import { ColorsHandle } from '../components/ColorsHandleSvg.js';

import { ColorContext } from '../context/index.js';

import { clearLikedPublications, getLikedPublications } from '../actions/likedPublications.js';
import { clearCurrentUser } from '../actions/currentUser.js';

const ConnectedHeader = (props) => {
    const closeBtnAnimation = document.querySelectorAll('.close-colors');
    const openBtnAnimation = document.querySelectorAll('.open-colors');

    const [colorContext, setColorContext] = useContext(ColorContext);

    const closeMenu = () => {
        props.setMenuOpened(false);

        if (props.menuOpened) {
            for (let i = 0; i < openBtnAnimation.length; i++) {
                openBtnAnimation[i].beginElement();
            }
        }
    }

    const openMenu = () => {
        props.setMenuOpened(true);

        for (let i = 0; i < closeBtnAnimation.length; i++) {
            closeBtnAnimation[i].beginElement();
        }
    }

    const toggleMenu = (ev) => {
        ev.preventDefault();

        if (props.menuOpened) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    return (
        <header className={"header js-header"
            + (colorContext ? " colors-menu-" + colorContext : "")
        }>
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

                                <ColorsHandle />

                                <button
                                    id="startButton"
                                    className="colors-handle__btn"
                                    aria-label={(props.menuOpened ? "Закрыть цветовое меню" : "Открыть цветовое меню")}
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
                                        href={"https://unsplash.com/" + props.currentUser}
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
                                            props.clearCurrentUser();
                                            props.clearLikedPublications();
                                            props.authorizeUser();
                                        }
                                        }>
                                    </button>
                                </li>

                                <li className="header__btn-item">
                                    <button
                                        className="header__btn btn btn--color-theme js-btn-color-theme"
                                        aria-label="Сменить цветовой режим"
                                        type="button"
                                        onClick={() => document.body.classList.toggle('dark-theme')}>
                                    </button>
                                </li>

                                <li className="header__btn-item">
                                    <button
                                        className="header__btn btn btn--likes js-btn-likes"
                                        aria-label="Перейти к отмеченным публикациям"
                                        type="button"
                                        onClick={() => {
                                            props.getLikedPublications(props.currentUser);
                                            props.setLikedContainerIsOpen(true);
                                            document.body.classList.add('js-fixed');
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
                setPage={props.setPage}
            />
        </header>
    );
}

const mapStateToProps = state => {
    return {
        likedPublications: state.likedPublicationsReducer.likedPublications,
        isLoading: state.likedPublicationsReducer.isLoading,
        error: state.likedPublicationsReducer.error,

        currentUser: state.currentUserReducer.currentUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getLikedPublications: (currentUser) => dispatch(getLikedPublications(currentUser)),
        clearLikedPublications: () => dispatch(clearLikedPublications()),
        clearCurrentUser: () => dispatch(clearCurrentUser())
    }
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(ConnectedHeader);
