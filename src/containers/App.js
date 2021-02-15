import React, { useRef, useState, useEffect, useCallback } from 'react';

import { Header } from '../components/Header.js';
import { Page } from '../components/Page.js';
import { PictureContainer } from '../components/PictureContainer.js';
import { LikedContainer } from '../components/LikedContainer.js';

import '../styles/style.scss';

export function App() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [publications, setPublications] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [color, setColor] = useState(null);
    const [picContainerIsOpen, setPicContainerIsOpen] = useState(false);
    const [picContainerIsVisible, setPicContainerIsVisible] = useState(false);

    const [currentAuthorName, setCurrentAuthorName] = useState('');
    const [currentAuthorImg, setCurrentAuthorImg] = useState('');
    const [currentPublicationTime, setCurrentPublicationTime] = useState('');
    const [currentFullImg, setCurrentFullImg] = useState('');
    const [currentRegularImg, setCurrentRegularImg] = useState('');
    const [currentImgPlaceholder, setCurrentImgPlaceholder] = useState('');
    const [currentImgHref, setCurrentImgHref] = useState('');
    const [currentImgAlt, setCurrentImgAlt] = useState('');

    const observer = useRef()
    const bodyEl = document.querySelector('.js-body');

    const picContainerHandler = (authorName, authorImg, time, fullImg, regularImg, imgPlaceholder, imgHref, imgAlt) => {

        if (!picContainerIsOpen) {
            setCurrentAuthorName(authorName);
            setCurrentAuthorImg(authorImg);
            setCurrentPublicationTime(time);
            setCurrentFullImg(fullImg);
            setCurrentRegularImg(regularImg);
            setCurrentImgPlaceholder(imgPlaceholder);
            setCurrentImgHref(imgHref);
            setCurrentImgAlt(imgAlt);

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
            query: 'html5 js javascript php coder programming programmer computers coworking internet git github website',
            per_page: 10,
            page: page
        }

        if (color) {
            params.color = color;
        }

        fetch('https://api.unsplash.com/search/photos/?' + new URLSearchParams(params), {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Client-ID IclwidfyuuU2dcaoL9yAu4DQTfW1o8U1Uqx_kjkxrRE'
            }),
        })
            .then(res => res.json())
            .then(
                (res) => {
                    setPublications([...publications, ...res.results]);
                    setTotalPages(res.total_pages)
                    setLoading(false);
                },

                (error) => {
                    setError(error);
                    setLoading(false);
                }
            )
    }

    if (error) {
        return (<div>Ошибка: {error.message}</div>);
    } else {
        return (
            <div className="body__app app">

                {/* <button
                    onClick={() => {bodyEl.classList.add('liked-container-open', 'js-fixed')}}
                >нажми</button> */}

                <PictureContainer
                    currentAuthorName={currentAuthorName}
                    currentAuthorImg={currentAuthorImg}
                    currentPublicationTime={currentPublicationTime}
                    currentFullImg={currentFullImg}
                    currentRegularImg={currentRegularImg}
                    currentImgPlaceholder={currentImgPlaceholder}
                    currentImgAlt={currentImgAlt}
                    currentImgHref={currentImgHref}
                    picContainerHandler={picContainerHandler}
                    picContainerIsVisible={picContainerIsVisible}
                />

                <LikedContainer
                    picContainerHandler={picContainerHandler}
                    setPicContainerIsVisible={setPicContainerIsVisible}
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
                />
            </div>
        );
    }
}
