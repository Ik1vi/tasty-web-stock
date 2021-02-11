import React, { useState, useEffect } from 'react';

import { PicItem } from '../components/PicItem.js';
import { CloseBtn } from '../components/CloseBtn.js'

export function LikedContainer(props) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [likedPublications, setLikedPublications] = useState([]);

    useEffect(() => {
        getLikedPublications();
    }, [])

    const getLikedPublications = () => {
        setLoading(true);

        fetch('https://api.unsplash.com/users/kuzyema/likes', {
            method: 'get',
            headers: new Headers({
                'pragma':'no-cache',
                'cache-control':'no-cache',
                'Authorization': 'Client-ID IclwidfyuuU2dcaoL9yAu4DQTfW1o8U1Uqx_kjkxrRE'
            }),
        })
            .then(res => res.json())
            .then(
                (res) => {
                    setLikedPublications(res);
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
            <div className="liked-container js-liked-container">
                <CloseBtn
                    className="liked-container__btn-close"
                    picContainerHandler={props.picContainerHandler}
                />

                <div className="liked-container__wrapper js-liked-wrapper">

                    <h2 className="liked-container__title">Вы отметили эти публикации:</h2>

                    <ul className="liked-container__list">
                        {likedPublications.map((p, i) => {
                            return <PicItem
                                key={p.id}

                                src={p.urls.small}
                                fullImg={p.urls.full}
                                placeholder={p.urls.thumb}
                                color={p.color}
                                alt={p.alt_description}

                                likes={p.likes}

                                time={p.created_at}

                                authorName={p.user.name}
                                authorImg={p.user.profile_image.small}

                                listItemClassName='liked-container__item'
                                publicationClassName='liked-container__publication'

                                picContainerHandler={props.picContainerHandler}
                                setPicContainerIsVisible={props.setPicContainerIsVisible}

                                ref={null}
                            />
                        }
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}