import React, { useState, useEffect } from 'react';

import { toJson } from 'unsplash-js';

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

        props.unsplash.users.likes('kuzyema')
            .then(toJson)
            .then(res => {
                if (res.errors) {
                    setError(res.errors[0]);
                    setLoading(false);
                } else {
                    setLikedPublications(res);
                    setLoading(false);
                }
            })
    }

    if (error) {
        return (<div>Ошибка: {error}</div>);

    } else {
        return (
            <div className="liked-container js-liked-container">
                <CloseBtn
                    className="liked-container__btn-close"
                    bodyEl={props.bodyEl}
                    setPicContainerIsOpen={props.setPicContainerIsOpen}
                    setPicContainerIsVisible={props.setPicContainerIsVisible}
                />

                <div className="liked-container__wrapper js-liked-wrapper">

                    <h2 className="liked-container__title">Вы отметили эти публикации:</h2>

                    <ul className="liked-container__list">
                        {likedPublications.map((p, i) => {
                            return <PicItem
                                key={p.id}

                                src={p.urls.regular}
                                fullImg={p.urls.full}
                                placeholder={p.urls.thumb}
                                color={p.color}
                                alt={p.alt_description}

                                likes={p.likes}

                                time={p.created_at}

                                authorName={p.user.name}
                                authorImg={p.user.profile_image.small}
                                authorHref={p.user.links.html}

                                listItemClassName='liked-container__item'
                                publicationClassName='liked-container__publication'

                                picContainerHandler={props.picContainerHandler}
                                setPicContainerIsVisible={props.setPicContainerIsVisible}

                                ref={null}
                            />
                        }
                        )}
                    </ul>

                    {props.loading ? (
                        <div className="page__loading loading">
                            ...loading
                        </div>
                    ) : (null)}
                </div>
            </div>
        );
    }
}
