import React, { useRef, useState, useEffect, useCallback } from 'react';

import Unsplash, { toJson } from 'unsplash-js';

import { Header } from './Header.js';
import { Page } from './Page.js';
import { PictureContainer } from './PictureContainer.js';
import { LikedContainer } from './LikedContainer.js';

import '../styles/style.scss';

export function Main(props) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const [publications, setPublications] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [color, setColor] = useState(null);
    const [picContainerIsOpen, setPicContainerIsOpen] = useState(false);
    const [picContainerIsVisible, setPicContainerIsVisible] = useState(false);

    const [currentUserName, setCurrentUserName] = useState('');

    const [currentPublication, setCurrentPublication] = useState(
        {
            'id' : '',
            'authorName': '',
            'authorImg' : '',
            'authorHref' : '',
            'time' : '',
            'fullImg' : '',
            'src' : '',
            'placeholder' : '',
            'imgHref' : '',
            'alt' : '',
            'likes' : '',
            'likedByUser': false
        }
    )

    const observer = useRef()
    const bodyEl = document.querySelector('.js-body');

    const picContainerHandler = (newCurrentPublication) => {

        if (!picContainerIsOpen) {
            setCurrentPublication(newCurrentPublication);

            setPicContainerIsVisible(true);
            setPicContainerIsOpen(true);

            bodyEl.classList.add('picture-container-open', 'js-fixed');
            bodyEl.classList.remove('liked-container-open');

        } else {
            bodyEl.classList.remove('picture-container-open', 'js-fixed');
            setPicContainerIsOpen(false);
            setPicContainerIsVisible(false);
        }
    }

    document.addEventListener('mousedown', function (e) {
        if (!e.target.closest('.js-picture-container-wrapper') && !e.target.closest('.js-liked-wrapper')) {
            bodyEl.classList.remove('liked-container-open', 'picture-container-open', 'js-fixed');
            setPicContainerIsVisible(false);
            setPicContainerIsOpen(false);
        }
    });

    const authorizeUser = () => {
        localStorage.removeItem('authorized');
        localStorage.removeItem('bearerToken');
        props.setAuthorized(false);

        if (!props.authorized) {
            console.log('авторизовываемся')
            const authenticationUrl = props.unsplash.auth.getAuthenticationUrl([
                "public",
                "write_likes"
            ]);
            location.assign(authenticationUrl);
        }
    }

    const getCurrentUser = () => {
        props.unsplash.currentUser.profile()
            .then(toJson)
            .then(json => {
            setCurrentUserName(json.username);
            console.log(json.username)
        });
    }

    useEffect(() => {
        getPublications(page, color);

        if (props.authorized && !currentUserName) {
            getCurrentUser();
        }
    }, [page, color])

    const lastElementRef = useCallback((element) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && page <= totalPages) {

                setPage(page => page + 1)
            }
        })

        if (element) observer.current.observe(element);
    }, [loading, page, color]);

    const getPublications = (page, color) => {
        setLoading(true);

        let params = {
            query: 'programming electronic tech javascript laptop html',
            per_page: 50,
            page: page
        }

        if (color) {
            params.color = color;
        }

        props.unsplash.search.photos(params.query, params.per_page, params.page, color ? { color: color } : {})
            .then(toJson)
            .then(res => {
                if (res.errors) {
                    setError(res.errors[0]);
                    setLoading(false);
                } else {
                    const feed = res;
                    const { total, results } = feed;

                    setPublications([...publications, ...results]);
                    setTotalPages(total)
                    setLoading(false);
                }
            });
    }

    if (error) {
        return (<div>Ошибка: {error.message}</div>);
    } else {
        return (
            <div className="body__app app">
                <PictureContainer
                    currentPublication={currentPublication}

                    picContainerIsVisible={picContainerIsVisible}
                    bodyEl={bodyEl}

                    picContainerHandler={picContainerHandler}
                    setPicContainerIsOpen={setPicContainerIsOpen}
                    setPicContainerIsVisible={setPicContainerIsVisible}

                    unsplash={props.unsplash}
                    authorizeUser={authorizeUser}
                    authorized={props.authorized}
                />

                <LikedContainer
                    picContainerHandler={picContainerHandler}
                    setPicContainerIsVisible={setPicContainerIsVisible}
                    bodyEl={bodyEl}
                    setPicContainerIsOpen={setPicContainerIsOpen}
                    
                    unsplash={props.unsplash}
                    authorizeUser={authorizeUser}
                    authorized={props.authorized}

                    currentUserName={currentUserName}
                />

                <Header
                    getPublications={getPublications}
                    setColor={setColor}
                    setPublications={setPublications}
                    setPage={setPage}
                    page={page}

                    authorizeUser={authorizeUser}
                    authorized={props.authorized}
                    setAuthorized={props.setAuthorized}
                    currentUserName={currentUserName}
                />

                <Page
                    publications={publications}
                    lastElementRef={lastElementRef}
                    picContainerHandler={picContainerHandler}
                    setPicContainerIsVisible={setPicContainerIsVisible}
                    loading={loading}

                    authorized={props.authorized}
                    authorizeUser={authorizeUser}
                    unsplash={props.unsplash}
                />
            </div>
        );
    }
}
