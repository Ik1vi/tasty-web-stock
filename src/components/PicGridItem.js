import React from 'react';

import { ContentImg } from '../components/ContentImg.js';
import { LikeBtn } from '../components/LikeBtn.js';
import { PublicationTime } from '../components/PublicationTime.js';
import { Author } from '../components/Author.js';

export function PicGridItem(props) {
    const [hovered, setHovered] = React.useState(false);

    const toggleHover = () => {
        setHovered(!hovered);
    }
    return (
        <li className={"pic-grid__list-item " + (hovered ? "pic-item-hover" : "")}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >
            <article className="pic-grid__publication publication js-publication">
                <div className="publication__points">
                    <ContentImg
                        img={props.img}
                    />

                    <LikeBtn
                    />

                    <PublicationTime
                        time={props.time}
                    />
                 </div>

                <div className="publication__author-wrapper">
                    <Author
                        authorName={props.authorName}
                        authorImg={props.authorImg}
                    />
                </div>
            </article>
        </li>
    );
};