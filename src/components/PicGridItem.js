import React from 'react';

import { LikeBtn } from '../components/LikeBtn.js';
import { PublicationTime } from '../components/PublicationTime.js';
import { Author } from '../components/Author.js';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export function PicGridItem(props) {
    const [hovered, setHovered] = React.useState(false);
    const [isLoaded, setIsLoaded] = React.useState(false);

    const toggleHover = () => {
        setHovered(!hovered);
    }

    window.addEventListener("resize", props.resizeAllGridItems);

    return (
        <li className={"pic-grid__list-item " + (hovered ? "pic-item-hover" : "")}
            onLoad={props.resizeAllGridItems}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >

            <article className="pic-grid__publication publication js-publication">
                <div className="publication__points">
                    <LazyLoadImage
                        className="content-img"
                        afterLoad={() => setIsLoaded(true)}
                        alt={props.altDescription}
                        effect="blur"
                        src={props.img}
                    />

                    {isLoaded ? (
                        <div>
                            <LikeBtn />

                            <PublicationTime
                                time={props.time}
                            /> </div>)
                        : (null)}

                </div>
                {isLoaded ? (
                    <div className="publication__author-wrapper">
                        <Author
                            authorName={props.authorName}
                            authorImg={props.authorImg}
                        />
                    </div>)
                    : (null)}
            </article>
        </li>
    );
};