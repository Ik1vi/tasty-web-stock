import React from 'react';

import { Header } from '../components/Header.js';
import { Page } from '../components/Page.js';

import '../styles/style.scss';

export function App() {
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [publications, setPublications] = React.useState({
        'total': 0,
        'total_pages': 0,
        'results': [],
    });

    // const getPublications = (color = null) => {
    //     let queryParams = { query: 'computer' };
    //     if (color) {
    //         queryParams['color'] = color;
    //     }
    // }

    React.useEffect(() => {
        fetch('https://api.unsplash.com/search/photos/?' + new URLSearchParams({query: 'computer'}), {
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
                // removeComment={removeComment}
                // comments={comments}
            />
            <Liked-Container
                // addComment={addComment} 
            /> */}
                <Header
                    
                />
                <Page
                    publications={publications}
                />
            </div>
        );
    }
}