import React, { useState } from 'react';

import { ContentImg } from '../components/ContentImg.js';
import { LikeBtn } from '../components/LikeBtn.js';
import { PublicationTime } from '../components/PublicationTime.js';
import { Author } from '../components/Author.js';

export const PicItem = React.forwardRef((props, ref) => {
    const [hovered, setHovered] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const [likeState, setLikeState] = useState(props.likedByUser);
    const [totalLikes, setTotalLikes] = useState(props.likes);

    const [itIsLikedContainer, setItIsLikedContainer] = useState(props.checkLikedContainer);

    window.addEventListener('resize', props.resizeAllGridItems);

    const openContainer = (e) => {
        if (!e.target.closest('.js-like') && !e.target.closest('.publication__author-wrapper')) {
            const newCurrentPublication = {
                'id': props.id,
                'authorName': props.authorName,
                'authorImg': props.authorImg,
                'authorHref': props.authorHref,
                'time': props.time,
                'fullImg': props.fullImg,
                'src': props.src,
                'placeholder': props.placeholder,
                'imgHref': props.imgHref,
                'alt': props.alt,
                'likes': totalLikes,
                'likedByUser': likeState
            }
            props.setPicContainerIsVisible(true);
            props.picContainerHandler(newCurrentPublication);
            setHovered(false);
        }
    }

    return (
        <li className={props.listItemClassName + (hovered ? " pic-item-hover" : "")}
            onLoad={props.resizeAllGridItems}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={
                openContainer
            }
            ref={ref}
        >

            <article className={props.publicationClassName + " publication js-publication"}>
                <div className="publication__points"
                    style={{
                        backgroundColor: props.color,
                    }}>
                    <ContentImg
                        className="publication__content-img js-picture-container-img"
                        src={props.src}
                        placeholder={props.placeholder}
                        alt={props.alt}
                        setIsLoaded={setIsLoaded}
                    />

                    {isLoaded ? (itIsLikedContainer ? (
                        <div className="liked-container__like-info">
                            <p
                                className="liked-container__total-likes">
                                {totalLikes}
                            </p>
                        </div>)
                        : (
                            <LikeBtn
                                className="publication__like"
                                id={props.id}
                                totalLikes={totalLikes}
                                likeState={likeState}
                                setLikeState={setLikeState}
                                setTotalLikes={setTotalLikes}

                                authorized={props.authorized}
                                authorizeUser={props.authorizeUser}
                            />
                        )) : (null)}

                    <PublicationTime
                        className="publication__publication-time"
                        time={props.time}
                    />
                </div>

                {isLoaded ? (
                    <div className="publication__author-wrapper">
                        <Author
                            className="publication__author"
                            authorName={props.authorName}
                            authorImg={props.authorImg}
                            authorHref={props.authorHref}
                        />
                    </div>)
                    : (null)}
            </article>
        </li>
    );
})
