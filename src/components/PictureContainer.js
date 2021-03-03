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
                bodyEl={props.bodyEl}
                setPicContainerIsOpen={props.setPicContainerIsOpen}
                setPicContainerIsVisible={props.setPicContainerIsVisible}
            />

            <div className="picture-container__wrapper js-picture-container-wrapper">
                <div className="picture-container__author-wrapper">
                    <Author
                        className="picture-container__author"
                        authorName={props.currentPublication.authorName}
                        authorImg={props.currentPublication.authorImg}
                        authorHref={props.currentPublication.authorHref}
                    />
                </div>

                <div className="picture-container__like-btn like">
                    <p className="like__total-likes">{props.currentPublication.likes}</p>

                    <button
                        className={"picture-container__like" + (props.currentPublication.likedByUser ? " picture-container__like--liked" : '')}
                    ></button>
                </div>

                {props.picContainerIsVisible ? (
                    <a
                        className="picture-container__content-img"
                        href={props.currentPublication.href}
                        target="_blank">
                        <ContentImg
                            className="picture-container__content-img js-picture-container-img"
                            src={props.currentPublication.src}
                            placeholder={props.currentPublication.placeholder}
                            alt={props.currentPublication.alt}
                            setIsLoaded={setIsLoaded}
                        />
                    </a>
                ) : null
                }

                <PublicationTime
                    className="picture-container__publication-time"
                    time={props.currentPublication.time}
                />
            </div>
        </div>
    )
}