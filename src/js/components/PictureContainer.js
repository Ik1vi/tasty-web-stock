import React, { useState } from 'react';

import { ContentImg } from '../components/ContentImg.js';
import { PublicationTime } from '../components/PublicationTime.js';
import { Author } from '../components/Author.js';
import { CloseBtn } from '../components/CloseBtn.js'

export function PictureContainer(props) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="picture-container js-picture-container" >
            <CloseBtn
                className="picture-container__btn-close"
                
                setPicContainerIsOpen={props.setPicContainerIsOpen}
                setPicContainerIsVisible={props.setPicContainerIsVisible}
                setLikedContainerIsOpen={props.setLikedContainerIsOpen}
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

                <div className="picture-container__like-info">
                    <p
                        className={"picture-container__total-likes" + (props.currentPublication.likedByUser ? " picture-container__total-likes--liked" : " ")}>
                        {props.currentPublication.likes}
                    </p>
                </div>

                {props.picContainerIsVisible ? (
                    <a
                        className="picture-container__content-img"
                        href={props.currentPublication.imgHref}
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
