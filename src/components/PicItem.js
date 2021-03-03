import React, { useState } from 'react';

import { ContentImg } from '../components/ContentImg.js';
import { LikeBtn } from '../components/LikeBtn.js';
import { PublicationTime } from '../components/PublicationTime.js';
import { Author } from '../components/Author.js';

export const PicItem = React.forwardRef((props, ref) => {
    const [hovered, setHovered] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    window.addEventListener('resize', props.resizeAllGridItems);


    const openContainer = (e) => {
        if (!e.target.closest('.js-like')) {
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
                'likes': props.likes,
                'likedByUser': props.likedByUser
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

                    <LikeBtn
                        className="publication__like"
                        likes={props.likes}
                        id={props.id}
                        likedByUser={props.likedByUser}

                        authorized={props.authorized}
                        authorizeUser={props.authorizeUser}
                        unsplash={props.unsplash}
                    />

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
});
