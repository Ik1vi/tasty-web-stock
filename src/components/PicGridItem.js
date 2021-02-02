import React, { useState } from 'react';

import { ContentImg } from '../components/ContentImg.js';
import { LikeBtn } from '../components/LikeBtn.js';
import { PublicationTime } from '../components/PublicationTime.js';
import { Author } from '../components/Author.js';

export function PicGridItem(props) {
    const [hovered, setHovered] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [appHeight, setAppHeight] = useState('');

    const toggleHover = () => {
        setHovered(!hovered);
    }

    window.addEventListener('resize', props.resizeAllGridItems);

    window.addEventListener('DOMContentLoaded', console.log(appHeight));

    return (
        <li className={"pic-grid__list-item " + (hovered ? "pic-item-hover" : "")}
            onLoad={props.resizeAllGridItems}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            >
            
            <article className="pic-grid__publication publication js-publication"
            onLoad={()=>setAppHeight(document.querySelector('.app').getBoundingClientRect().height)}
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
};
