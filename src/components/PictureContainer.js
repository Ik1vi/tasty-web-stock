import React, { useState } from 'react';

import { ContentImg } from '../components/ContentImg.js';
import { LikeBtn } from '../components/LikeBtn.js';
import { PublicationTime } from '../components/PublicationTime.js';
import { Author } from '../components/Author.js';
import { CloseBtn } from '../components/CloseBtn.js'

export function PictureContainer(props) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="picture-container js-picture-container" >
            <CloseBtn
                className="picture-container__btn-close"
                picContainerHandler={props.picContainerHandler}
            />

            <div className="picture-container__wrapper js-picture-container-wrapper">
                <div className="picture-container__author-wrapper">
                    <Author
                        className="picture-container__author"
                        authorName={props.currentAuthorName}
                        authorImg={props.currentAuthorImg}
                    />
                </div>

                <LikeBtn
                    className="picture-container__like-btn"
                />

                {props.picContainerIsVisible ? (
                    <a
                        className="picture-container__content-img"
                        href={props.currentImgHref}
                        target="_blank">
                        <ContentImg
                            className="picture-container__content-img js-picture-container-img"
                            src={props.currentFullImg}
                            placeholder={props.currentRegularImg}
                            alt={props.currentImgAlt}
                            setIsLoaded={setIsLoaded}
                        />
                    </a>
                ) : null
                }

                <PublicationTime
                    className="picture-container__publication-time"
                    time={props.currentPublicationTime}
                />
            </div>
        </div>
    )
}