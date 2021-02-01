import React, { useState, useEffect } from 'react';

import { Header } from '../components/Header.js';
import { Page } from '../components/Page.js';

import '../styles/style.scss';

export function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [publications, setPublications] = useState({
        'total': 0,
        'total_pages': 0,
        'results': [],
    });

    const getPublications = (color = null) => {
        

        let params = {
            query: 'laptop html5 js javascript php coder programming programmer computers coworking internet git github website',
            per_page: 30
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
                    setIsLoaded(true);
                    setPublications(res);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    useEffect(() => {
        getPublications();
    }, [])

    if (error) {
        return (<div>Ошибка: {error.message}</div>);
    } else if (!isLoaded) {
        return (<div>Загрузка...</div>);
    } else {
        return (
            <div className="body__app app">
                {
                /* <PictureContainer
                />
                <Liked-Container
                /> */}
                <Header
                    getPublications={getPublications}
                />

                <Page
                    publications={publications}
                />
            </div>
        );
    }
}