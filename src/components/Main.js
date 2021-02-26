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
        console.log(props.authorized)
        if (props.authorized) {
            getPublications(page, color);
            console.log('все ок');
        } else {
            const authenticationUrl = props.unsplash.auth.getAuthenticationUrl([
                "public",
                "write_likes"
            ]);
            location.assign(authenticationUrl);
            console.log('над авторизоваться');
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
            per_page: 10,
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
                    unsplash={props.unsplash}
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