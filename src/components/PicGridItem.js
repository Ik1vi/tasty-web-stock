import React from 'react';

import { ContentImg } from '../components/ContentImg.js';
import { LikeBtn } from '../components/LikeBtn.js';
import { PublicationTime } from '../components/PublicationTime.js';
import { Author } from '../components/Author.js';

export function PicGridItem(props) {
    return (
        <li className="pic-grid__list-item">
            <article className="pic-grid__publication publication js-publication">
                <div className="publication__points">
                    <ContentImg
                    />
                    
                    <LikeBtn
                    />

                    <PublicationTime
                    />
                </div>

                <div className="publication__author-wrapper">
                    <Author />
                </div>
            </article>
        </li>
    );
};