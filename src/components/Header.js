import React, {useState} from 'react';

import { ColorsMenu } from '../components/ColorsMenu.js';

// import openColorsBtn from '../img/open-colors-btn.svg';
import closeColorsBtnAnimate from '../img/close-colors-btn-animate.svg';
// import openColorsBtnAnimate from '../img/open-colors-btn-animate.svg';

export function Header(props) {
    const bodyEl = document.querySelector('.js-body');
    const [colorsHandle, updateColorsHandle] = useState(closeColorsBtnAnimate)

    const [menuOpened, setMenuOpened] = useState(false);

    const closeBtnAnimation = document.querySelectorAll('.close-colors');
    const openBtnAnimation = document.querySelectorAll('.open-colors');

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

                                <svg version="1.1" id="123" x="0px" y="0px" viewBox="0 0 315.68 315.68"  >
                                    <path className="st0" fill="#B33F7E" d="M107.78,107.56L61.29,61.07c-9.84,9.82-18.2,21.13-24.69,33.57c-9.87,18.9-15.46,40.4-15.46,63.2h65.75
                                        c0-4.06,0.34-8.04,1-11.91C90.4,131.05,97.54,117.76,107.78,107.56z">
                                        <animate
                                            className="open-colors"
                                            dur="0.5s"		
                                            repeatCount="1"
                                            attributeName="d"
                                            fill="freeze"
                                            restart="always"
                                            begin="indefinite"
                                            values="M157.8,157.84L61.29,61.07c-9.84,9.82-18.2,21.13-24.69,33.57c0,0,40.39,40.11,62.75,63.2h32.07
                                                c5.43,0,5.43,0,9.45,0C149.66,157.84,153.06,157.95,157.8,157.84z;
                                                M107.78,107.56L61.29,61.07c-9.84,9.82-18.2,21.13-24.69,33.57c-9.87,18.9-15.46,40.4-15.46,63.2h65.75
                                                c0-4.06,0.34-8.04,1-11.91C90.4,131.05,97.54,117.76,107.78,107.56z
                                            "
                                        />
                                        <animate className="close-colors"
                                            dur="0.5s"
                                            id="close-color"
                                            repeatCount="1"
                                            attributeName="d"
                                            fill="freeze"
                                            restart="always"
                                            begin="indefinite"
                                            values="M107.78,107.56L61.29,61.07c-9.84,9.82-18.2,21.13-24.69,33.57c-9.87,18.9-15.46,40.4-15.46,63.2h65.75
                                                c0-4.06,0.34-8.04,1-11.91C90.4,131.05,97.54,117.76,107.78,107.56z;
                                                M157.8,157.84L61.29,61.07c-9.84,9.82-18.2,21.13-24.69,33.57c0,0,40.39,40.11,62.75,63.2h32.07
                                                c5.43,0,5.43,0,9.45,0C149.66,157.84,153.06,157.95,157.8,157.84z
                                            "
                                        />
                                    </path>
                                    <path className="st1" fill="#652CAC" d="M87.89,169.8c-0.66-3.87-1-7.85-1-11.91H21.14c0,22.8,5.59,44.3,15.46,63.2c6.49,12.44,14.85,23.75,24.69,33.57
                                        l46.49-46.49C97.54,197.97,90.4,184.68,87.89,169.8z">
                                        <animate
                                            className="open-colors"
                                            dur="0.5s"		
                                            repeatCount="1"
                                            attributeName="d"
                                            fill="freeze"
                                            restart="always"
                                            begin="indefinite"
                                            values="M140.87,157.89c-4.02,0-4.02,0-9.45,0H99.35c-22.36,23.09-62.75,63.2-62.75,63.2
                                                c6.49,12.44,14.85,23.75,24.69,33.57l96.51-96.77C153.06,157.78,149.66,157.89,140.87,157.89z;
                                                M87.89,169.8c-0.66-3.87-1-7.85-1-11.91H21.14c0,22.8,5.59,44.3,15.46,63.2c6.49,12.44,14.85,23.75,24.69,33.57
                                                l46.49-46.49C97.54,197.97,90.4,184.68,87.89,169.8z
                                            "
                                        />
                                        <animate className="close-colors"
                                            dur="0.5s"		
                                            repeatCount="1"
                                            attributeName="d"
                                            fill="freeze"
                                            restart="always"
                                            begin="indefinite"
                                            values="M87.89,169.8c-0.66-3.87-1-7.85-1-11.91H21.14c0,22.8,5.59,44.3,15.46,63.2c6.49,12.44,14.85,23.75,24.69,33.57
                                                l46.49-46.49C97.54,197.97,90.4,184.68,87.89,169.8z;
                                                M140.87,157.89c-4.02,0-4.02,0-9.45,0H99.35c-22.36,23.09-62.75,63.2-62.75,63.2
                                                c6.49,12.44,14.85,23.75,24.69,33.57l96.51-96.77C153.06,157.78,149.66,157.89,140.87,157.89z
                                            "
                                        />
                                    </path>
                                    <path className="st2" fill="#025F8C" d="M107.7,207.91L61.21,254.4c9.82,9.84,21.13,18.2,33.57,24.69c18.9,9.87,40.4,15.46,63.2,15.46V228.8
                                        c-4.06,0-8.04-0.34-11.91-1C131.19,225.29,117.9,218.15,107.7,207.91z">
                                        <animate
                                            className="open-colors"
                                            dur="0.5s"		
                                            repeatCount="1"
                                            attributeName="d"
                                            fill="freeze"
                                            restart="always"
                                            begin="indefinite"
                                            values="M157.98,157.89L61.21,254.4c9.82,9.84,21.13,18.2,33.57,24.69c0,0,40.11-40.39,63.2-62.75v-32.07
                                                c0-5.43,0-5.43,0-9.45C157.98,166.03,158.09,162.63,157.98,157.89z;
                                                M107.7,207.91L61.21,254.4c9.82,9.84,21.13,18.2,33.57,24.69c18.9,9.87,40.4,15.46,63.2,15.46V228.8
                                                c-4.06,0-8.04-0.34-11.91-1C131.19,225.29,117.9,218.15,107.7,207.91z;
                                            "
                                        />
                                        <animate
                                            className="close-colors"
                                            dur="0.5s"		
                                            repeatCount="1"
                                            attributeName="d"
                                            fill="freeze"
                                            restart="always"
                                            begin="indefinite"
                                            values="M107.7,207.91L61.21,254.4c9.82,9.84,21.13,18.2,33.57,24.69c18.9,9.87,40.4,15.46,63.2,15.46V228.8
                                                c-4.06,0-8.04-0.34-11.91-1C131.19,225.29,117.9,218.15,107.7,207.91z;
                                                M157.98,157.89L61.21,254.4c9.82,9.84,21.13,18.2,33.57,24.69c0,0,40.11-40.39,63.2-62.75v-32.07
                                                c0-5.43,0-5.43,0-9.45C157.98,166.03,158.09,162.63,157.98,157.89z
                                            "
                                        />
                                    </path>
                                    <path className="st3" fill="#328B88" d="M169.94,227.8c-3.87,0.66-7.85,1-11.91,1v65.75c22.8,0,44.3-5.59,63.2-15.46
                                        c12.44-6.49,23.75-14.85,33.57-24.69l-46.49-46.49C198.11,218.15,184.82,225.29,169.94,227.8z">
                                        <animate
                                            className="open-colors"
                                            dur="0.5s"		
                                            repeatCount="1"
                                            attributeName="d"
                                            fill="freeze"
                                            restart="always"
                                            begin="indefinite"
                                            values="M158.03,174.82c0,4.02,0,4.02,0,9.45v32.07c23.09,22.36,63.2,62.75,63.2,62.75
                                                c12.44-6.49,23.75-14.85,33.57-24.69l-96.77-96.51C157.92,162.63,158.03,166.03,158.03,174.82z;M169.94,227.8c-3.87,0.66-7.85,1-11.91,1v65.75c22.8,0,44.3-5.59,63.2-15.46
                                                c12.44-6.49,23.75-14.85,33.57-24.69l-46.49-46.49C198.11,218.15,184.82,225.29,169.94,227.8z
                                            "
                                        />
                                        <animate
                                            className="close-colors"
                                            dur="0.5s"		
                                            repeatCount="1"
                                            attributeName="d"
                                            fill="freeze"
                                            restart="always"
                                            begin="indefinite"
                                            values="M169.94,227.8c-3.87,0.66-7.85,1-11.91,1v65.75c22.8,0,44.3-5.59,63.2-15.46
                                                c12.44-6.49,23.75-14.85,33.57-24.69l-46.49-46.49C198.11,218.15,184.82,225.29,169.94,227.8z;
                                                M158.03,174.82c0,4.02,0,4.02,0,9.45v32.07c23.09,22.36,63.2,62.75,63.2,62.75
                                                c12.44-6.49,23.75-14.85,33.57-24.69l-96.77-96.51C157.92,162.63,158.03,166.03,158.03,174.82z
                                            "
                                        />
                                    </path>
                                    <path className="st4" fill="#2D8349" d="M208.01,208.09l46.49,46.49c9.84-9.82,18.2-21.13,24.69-33.57c9.87-18.9,15.46-40.4,15.46-63.2H228.9
                                        c0,4.06-0.34,8.04-1,11.91C225.39,184.6,218.25,197.89,208.01,208.09z">
                                        <animate
                                            className="open-colors"
                                            dur="0.5s"		
                                            repeatCount="1"
                                            attributeName="d"
                                            fill="freeze"
                                            restart="always"
                                            begin="indefinite"
                                            values="M157.99,157.81l96.51,96.77c9.84-9.82,18.2-21.13,24.69-33.57c0,0-40.39-40.11-62.75-63.2h-32.07
                                                c-5.43,0-5.43,0-9.45,0C166.13,157.81,162.73,157.7,157.99,157.81z;
                                                M208.01,208.09l46.49,46.49c9.84-9.82,18.2-21.13,24.69-33.57c9.87-18.9,15.46-40.4,15.46-63.2H228.9
                                                c0,4.06-0.34,8.04-1,11.91C225.39,184.6,218.25,197.89,208.01,208.09z
                                            
                                            "
                                        />
                                        <animate
                                            className="close-colors"
                                            dur="0.5s"		
                                            repeatCount="1"
                                            attributeName="d"
                                            fill="freeze"
                                            restart="always"
                                            begin="indefinite"
                                            values="M208.01,208.09l46.49,46.49c9.84-9.82,18.2-21.13,24.69-33.57c9.87-18.9,15.46-40.4,15.46-63.2H228.9
                                                c0,4.06-0.34,8.04-1,11.91C225.39,184.6,218.25,197.89,208.01,208.09z;
                                                M157.99,157.81l96.51,96.77c9.84-9.82,18.2-21.13,24.69-33.57c0,0-40.39-40.11-62.75-63.2h-32.07
                                                c-5.43,0-5.43,0-9.45,0C166.13,157.81,162.73,157.7,157.99,157.81z
                                            "
                                        />
                                    </path>
                                    <path className="st5" fill="#FFCD1E" d="M227.9,145.85c0.66,3.87,1,7.85,1,11.91h65.75c0-22.8-5.59-44.3-15.46-63.2
                                        c-6.49-12.44-14.85-23.75-24.69-33.57l-46.49,46.49C218.25,117.68,225.39,130.97,227.9,145.85z">
                                        <animate
                                            className="open-colors"
                                            dur="0.5s"		
                                            repeatCount="1"
                                            attributeName="d"
                                            fill="freeze"
                                            restart="always"
                                            begin="indefinite"
                                            values="M174.92,157.76c4.02,0,4.02,0,9.45,0h32.07c22.36-23.09,62.75-63.2,62.75-63.2
                                                c-6.49-12.44-14.85-23.75-24.69-33.57l-96.51,96.77C162.73,157.87,166.13,157.76,174.92,157.76z;
                                                M227.9,145.85c0.66,3.87,1,7.85,1,11.91h65.75c0-22.8-5.59-44.3-15.46-63.2
                                                c-6.49-12.44-14.85-23.75-24.69-33.57l-46.49,46.49C218.25,117.68,225.39,130.97,227.9,145.85z
                                            "
                                        />
                                        <animate
                                            className="close-colors"
                                            dur="0.5s"		
                                            repeatCount="1"
                                            attributeName="d"
                                            fill="freeze"
                                            restart="always"
                                            begin="indefinite"
                                            values="M227.9,145.85c0.66,3.87,1,7.85,1,11.91h65.75c0-22.8-5.59-44.3-15.46-63.2
                                                c-6.49-12.44-14.85-23.75-24.69-33.57l-46.49,46.49C218.25,117.68,225.39,130.97,227.9,145.85z;
                                                M174.92,157.76c4.02,0,4.02,0,9.45,0h32.07c22.36-23.09,62.75-63.2,62.75-63.2
                                                c-6.49-12.44-14.85-23.75-24.69-33.57l-96.51,96.77C162.73,157.87,166.13,157.76,174.92,157.76z
                                            "
                                        />
                                    </path>
                                    <path className="st6" fill="#FE9200" d="M208.09,107.74l46.49-46.49c-9.82-9.84-21.13-18.2-33.57-24.69c-18.9-9.87-40.4-15.46-63.2-15.46v65.75
                                        c4.06,0,8.04,0.34,11.91,1C184.6,90.36,197.89,97.5,208.09,107.74z">
                                        <animate
                                            className="open-colors"
                                            dur="0.5s"		
                                            repeatCount="1"
                                            attributeName="d"
                                            fill="freeze"
                                            restart="always"
                                            begin="indefinite"
                                            values="M157.81,157.76l96.77-96.51c-9.82-9.84-21.13-18.2-33.57-24.69c0,0-40.11,40.39-63.2,62.75v32.07
                                                c0,5.43,0,5.43,0,9.45C157.81,149.62,157.7,153.02,157.81,157.76z;
                                                M208.09,107.74l46.49-46.49c-9.82-9.84-21.13-18.2-33.57-24.69c-18.9-9.87-40.4-15.46-63.2-15.46v65.75
                                                c4.06,0,8.04,0.34,11.91,1C184.6,90.36,197.89,97.5,208.09,107.74z
                                            "
                                        />
                                        <animate
                                            className="close-colors"
                                            dur="0.5s"		
                                            repeatCount="1"
                                            attributeName="d"
                                            fill="freeze"
                                            restart="always"
                                            begin="indefinite"
                                            values="M208.09,107.74l46.49-46.49c-9.82-9.84-21.13-18.2-33.57-24.69c-18.9-9.87-40.4-15.46-63.2-15.46v65.75
                                                c4.06,0,8.04,0.34,11.91,1C184.6,90.36,197.89,97.5,208.09,107.74z;
                                                M157.81,157.76l96.77-96.51c-9.82-9.84-21.13-18.2-33.57-24.69c0,0-40.11,40.39-63.2,62.75v32.07
                                                c0,5.43,0,5.43,0,9.45C157.81,149.62,157.7,153.02,157.81,157.76z
                                            "
                                        />
                                    </path>
                                    <path className="st7" fill="#DC2A32" d="M145.85,87.85c3.87-0.66,7.85-1,11.91-1V21.1c-22.8,0-44.3,5.59-63.2,15.46
                                        c-12.44,6.49-23.75,14.85-33.57,24.69l46.49,46.49C117.68,97.5,130.97,90.36,145.85,87.85z">
                                        <animate
                                            className="open-colors"
                                            dur="0.5s"		
                                            repeatCount="1"
                                            attributeName="d"
                                            fill="freeze"
                                            restart="always"
                                            begin="indefinite"
                                            values="M157.76,140.83c0-4.02,0-4.02,0-9.45V99.31c-23.09-22.36-63.2-62.75-63.2-62.75
                                                c-12.44,6.49-23.75,14.85-33.57,24.69l96.77,96.51C157.87,153.02,157.76,149.62,157.76,140.83z;
                                                M145.85,87.85c3.87-0.66,7.85-1,11.91-1V21.1c-22.8,0-44.3,5.59-63.2,15.46
                                                c-12.44,6.49-23.75,14.85-33.57,24.69l46.49,46.49C117.68,97.5,130.97,90.36,145.85,87.85z
                                            "
                                        />
                                        <animate
                                            className="close-colors"
                                            dur="0.5s"		
                                            repeatCount="1"
                                            attributeName="d"
                                            fill="freeze"
                                            restart="always"
                                            begin="indefinite"
                                            values="M145.85,87.85c3.87-0.66,7.85-1,11.91-1V21.1c-22.8,0-44.3,5.59-63.2,15.46
                                                c-12.44,6.49-23.75,14.85-33.57,24.69l46.49,46.49C117.68,97.5,130.97,90.36,145.85,87.85z;
                                                M157.76,140.83c0-4.02,0-4.02,0-9.45V99.31c-23.09-22.36-63.2-62.75-63.2-62.75
                                                c-12.44,6.49-23.75,14.85-33.57,24.69l96.77,96.51C157.87,153.02,157.76,149.62,157.76,140.83z
                                            "
                                        />
                                    </path>
                                </svg>

                                <button
                                    id="startButton"
                                    className="colors-handle__btn"
                                    type="button"
                                    onClick={toggleMenu}>
                                </button>
                            </div>
                                
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