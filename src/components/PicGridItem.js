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
            ref={ref}
            >
            
            <article className="pic-grid__publication publication js-publication"
            >
                <div className="publication__points"
                    style={{
                        backgroundColor: props.color,
                    }}>
                    <ContentImg
                        src={props.src}
                        placeholder={props.placeholder}
                        alt={props.alt}
                        setIsLoaded={setIsLoaded}
                    />

                    <LikeBtn />
                    <PublicationTime
                        time={props.time}
                    />
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
});
