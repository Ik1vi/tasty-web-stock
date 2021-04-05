import React, { useRef, useState, useEffect, useCallback } from 'react';

import unsplash from '../api/index.js';
import { toJson } from 'unsplash-js';

import { connect } from 'react-redux';

import '../../styles/style.scss';

import { ColorContext, } from '../context/index.js';

import { Header } from './Header.js';
import { Page } from './Page.js';
import { PictureContainer } from './PictureContainer.js';
import { LikedContainer } from './LikedContainer.js';

import { getPublications } from '../actions/publications.js';

const ConnectedMain = (props) => {
    const [currentUserName, setCurrentUserName] = useState('');

    const [page, setPage] = useState(1);

    const [color, setColor] = useState(null);

    const [menuOpened, setMenuOpened] = useState(false);

    const [picContainerIsOpen, setPicContainerIsOpen] = useState(false);
    const [picContainerIsVisible, setPicContainerIsVisible] = useState(false);

    const [likedContainerIsOpen, setLikedContainerIsOpen] = useState(false);

    const [currentPublication, setCurrentPublication] = useState(
        {
            'id': '',
            'authorName': '',
            'authorImg': '',
            'authorHref': '',
            'time': '',
            'fullImg': '',
            'src': '',
            'placeholder': '',
            'imgHref': '',
            'alt': '',
            'likes': '',
            'likedByUser': false
        }
    )

    const observer = useRef()

    const picContainerHandler = (newCurrentPublication) => {
        if (!picContainerIsOpen) {
            setCurrentPublication(newCurrentPublication);

            setPicContainerIsVisible(true);
            setPicContainerIsOpen(true);

            document.body.classList.add('js-fixed');
            setLikedContainerIsOpen(false);

        } else {
            document.body.classList.remove('js-fixed');
            setPicContainerIsOpen(false);
            setPicContainerIsVisible(false);
        }
    }

    document.addEventListener('mousedown', function (e) {
        if (!e.target.closest('.js-picture-container-wrapper') && !e.target.closest('.js-liked-wrapper')) {
            document.body.classList.remove('js-fixed');

            setLikedContainerIsOpen(false);
            setPicContainerIsVisible(false);
            setPicContainerIsOpen(false);
        }
    });

    const authorizeUser = () => {
        localStorage.removeItem('authorized');
        localStorage.removeItem('bearerToken');
        props.setAuthorized(false);

        if (!props.authorized) {
            const authenticationUrl = unsplash.auth.getAuthenticationUrl([
                "public",
                "write_likes"
            ]);
            location.assign(authenticationUrl);
        }
    }

    const getCurrentUser = () => {
        unsplash.currentUser.profile()
            .then(toJson)
            .then(json => {
                setCurrentUserName(json.username);
            });
    }

    useEffect(() => {
        props.getPublications(page, color);

        if (props.authorized && !currentUserName) {
            getCurrentUser();
        }
    }, [page, color])

    const lastElementRef = useCallback((element) => {
        if (props.isLoading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && page <= props.totalPages) {

                setPage(page => page + 1)
            }
        })

        if (element) observer.current.observe(element);
    }, [props.isLoading, page, color]);

    if (props.error) {
        return (<div>Ошибка: {props.error.message}</div>);
    } else {
        return (
            <ColorContext.Provider value={[color, setColor]}>
                <div className={'body__app app'
                    + (menuOpened ? ' colors-menu-open' : '')
                    + (likedContainerIsOpen ? ' liked-container-open' : '')
                    + (picContainerIsOpen ? ' picture-container-open' : '')}>
                    <PictureContainer
                        currentPublication={currentPublication}

                        picContainerHandler={picContainerHandler}

                        picContainerIsVisible={picContainerIsVisible}
                        setPicContainerIsOpen={setPicContainerIsOpen}
                        setPicContainerIsVisible={setPicContainerIsVisible}

                        setLikedContainerIsOpen={setLikedContainerIsOpen}

                        authorizeUser={authorizeUser}
                        authorized={props.authorized}
                    />

                    <LikedContainer
                        picContainerHandler={picContainerHandler}

                        setPicContainerIsVisible={setPicContainerIsVisible}
                        setPicContainerIsOpen={setPicContainerIsOpen}

                        setLikedContainerIsOpen={setLikedContainerIsOpen}

                        authorizeUser={authorizeUser}
                        authorized={props.authorized}
                    />

                    <Header
                        setPage={setPage}

                        menuOpened={menuOpened}
                        setMenuOpened={setMenuOpened}

                        likedContainerIsOpen={likedContainerIsOpen}
                        setLikedContainerIsOpen={setLikedContainerIsOpen}

                        authorizeUser={authorizeUser}
                        authorized={props.authorized}
                        setAuthorized={props.setAuthorized}

                        currentUserName={currentUserName}
                    />

                    <Page
                        publications={props.publications}
                        lastElementRef={lastElementRef}
                        picContainerHandler={picContainerHandler}
                        setPicContainerIsVisible={setPicContainerIsVisible}
                        loading={props.isLoading}

                        authorized={props.authorized}
                        authorizeUser={authorizeUser}
                    />
                </div>
            </ColorContext.Provider>
        );
    }
}

const mapStateToProps = state => {
    return {
        publications: state.publicationsReducer.publications,
        totalPages: state.publicationsReducer.totalPages,
        isLoading: state.publicationsReducer.isLoading,
        error: state.publicationsReducer.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPublications: (page, color) => dispatch(getPublications(page, color))
    }
}

export const Main = connect(mapStateToProps, mapDispatchToProps)(ConnectedMain);
