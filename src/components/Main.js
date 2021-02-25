import React, { useRef, useState, useEffect, useCallback } from 'react';

import Unsplash, { toJson } from 'unsplash-js';

import { Header } from './Header.js';
import { Page } from './Page.js';
import { PictureContainer } from './PictureContainer.js';
import { LikedContainer } from './LikedContainer.js';

import '../styles/style.scss';

export function Main() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const [publications, setPublications] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [color, setColor] = useState(null);
    const [picContainerIsOpen, setPicContainerIsOpen] = useState(false);
    const [picContainerIsVisible, setPicContainerIsVisible] = useState(false);

    const [currentId, setCurrentId] = useState('');
    const [currentAuthorName, setCurrentAuthorName] = useState('');
    const [currentAuthorImg, setCurrentAuthorImg] = useState('');
    const [currentAuthorHref, setCurrentAuthorHref] = useState('');
    const [currentPublicationTime, setCurrentPublicationTime] = useState('');
    const [currentFullImg, setCurrentFullImg] = useState('');
    const [currentRegularImg, setCurrentRegularImg] = useState('');
    const [currentImgPlaceholder, setCurrentImgPlaceholder] = useState('');
    const [currentImgHref, setCurrentImgHref] = useState('');
    const [currentImgAlt, setCurrentImgAlt] = useState('');
    const [currentLikes, setCurrentLikes] = useState('');

    const observer = useRef()
    const bodyEl = document.querySelector('.js-body');

    const unsplash = new Unsplash({
        accessKey: 'IclwidfyuuU2dcaoL9yAu4DQTfW1o8U1Uqx_kjkxrRE',
        secret: 'ZDBdnP7xrjJKAdtVNO88NfGPZi3l2KZPI581KmXhfqM',
        callbackUrl: 'http://localhost:8080',
    });
    const [unsplashCode, setUnsplashCode] = useState('');

    const picContainerHandler = (id, authorName, authorImg, authorHref, time, fullImg, regularImg, imgPlaceholder, imgHref, imgAlt, likes) => {

        if (!picContainerIsOpen) {
            setCurrentId(id);
            setCurrentAuthorName(authorName);
            setCurrentAuthorImg(authorImg);
            setCurrentAuthorHref(authorHref);
            setCurrentPublicationTime(time);
            setCurrentFullImg(fullImg);
            setCurrentRegularImg(regularImg);
            setCurrentImgPlaceholder(imgPlaceholder);
            setCurrentImgHref(imgHref);
            setCurrentImgAlt(imgAlt);
            setCurrentLikes(likes);

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

    useEffect(() => {
        // const code = location.search.split('code=')[1]
        // if (code) {
        //     console.log(code)
        //     setUnsplashCode(code);
        // }

        // if (unsplashCode) {
        //     getPublications(page, color);
        // } else {
        //     // const authenticationUrl = unsplash.auth.getAuthenticationUrl();
        //     // location.assign(authenticationUrl);
        //     location.assign('http://localhost:8080?code=123')
        // }
        getPublications(page, color);
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
            per_page: 10,
            page: page
        }

        if (color) {
            params.color = color;
        }

        // fetch('https://api.unsplash.com/search/photos/?' + new URLSearchParams(params), {
        //     method: 'get',
        //     headers: new Headers({
        //         'Authorization': 'Client-ID IclwidfyuuU2dcaoL9yAu4DQTfW1o8U1Uqx_kjkxrRE'
        //     }),
        // })
        //     .then(res => res.json())
        //     .then(
        //         (res) => {
        //             setPublications([...publications, ...res.results]);
        //             setTotalPages(res.total_pages)
        //             setLoading(false);
        //         },

        //         (error) => {
        //             setError(error);
        //             setLoading(false);
        //         }
        //     )

        unsplash.search.photos(params.query, params.per_page, params.page, color ? { color: color } : {})
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
        // .then(res => {
        //     if (res.errors) {
        //         setError(res.error[0]);
        //         setLoading(false);
        //     } else {
        //         const feed = res.response;
        //         const { total, results } = feed;

        //         setPublications([...publications, ...results]);
        //         setTotalPages(total)
        //         setLoading(false);
        //     }
        // }
        // )
    }

    if (error) {
        return (<div>Ошибка: {error.message}</div>);
    } else {
        return (
            <div className="body__app app">
                <PictureContainer
                    currentId={currentId}
                    currentAuthorName={currentAuthorName}
                    currentAuthorImg={currentAuthorImg}
                    currentAuthorHref={currentAuthorHref}
                    currentPublicationTime={currentPublicationTime}
                    currentFullImg={currentFullImg}
                    currentRegularImg={currentRegularImg}
                    currentImgPlaceholder={currentImgPlaceholder}
                    currentImgAlt={currentImgAlt}
                    currentImgHref={currentImgHref}
                    currentLikes={currentLikes}

                    picContainerIsVisible={picContainerIsVisible}
                    bodyEl={bodyEl}

                    picContainerHandler={picContainerHandler}
                    setPicContainerIsOpen={setPicContainerIsOpen}
                    setPicContainerIsVisible={setPicContainerIsVisible}
                />

                <LikedContainer
                    picContainerHandler={picContainerHandler}
                    setPicContainerIsVisible={setPicContainerIsVisible}
                    bodyEl={bodyEl}
                    setPicContainerIsOpen={setPicContainerIsOpen}
                    unsplash={unsplash}
                />

                <Header
                    getPublications={getPublications}
                    setColor={setColor}
                    setPublications={setPublications}
                    setPage={setPage}
                    page={page}
                />

                <Page
                    publications={publications}
                    lastElementRef={lastElementRef}
                    picContainerHandler={picContainerHandler}
                    setPicContainerIsVisible={setPicContainerIsVisible}
                    loading={loading}
                />
            </div>
        );
    }
}
