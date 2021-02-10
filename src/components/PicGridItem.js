import React, { useState } from 'react';

import { ContentImg } from '../components/ContentImg.js';
import { LikeBtn } from '../components/LikeBtn.js';
import { PublicationTime } from '../components/PublicationTime.js';
import { Author } from '../components/Author.js';

export const PicGridItem = React.forwardRef((props, ref) => {
    const [hovered, setHovered] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const toggleHover = () => {
        setHovered(!hovered);
    }

    window.addEventListener('resize', props.resizeAllGridItems);

    return (
        <li className={"pic-grid__list-item " + (hovered ? "pic-item-hover" : "")}
            onLoad={props.resizeAllGridItems}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            onClick={() => props.picContainerHandler(props.authorName, props.authorImg, props.time, props.fullImg, props.placeholder, props.alt)}
            ref={ref}
        >

            <article
                className="pic-grid__publication publication js-publication"
            >
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
                        />
                    </div>)
                    : (null)}
            </article>
        </li>
    );
});
