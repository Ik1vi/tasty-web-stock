import React, { useState } from 'react';

import { ContentImg } from '../components/ContentImg.js';
import { LikeBtn } from '../components/LikeBtn.js';
import { PublicationTime } from '../components/PublicationTime.js';
import { Author } from '../components/Author.js';
import {CloseBtn} from '../components/CloseBtn.js'

export function PictureContainer(props) {

    return (
        <div
            className="picture-container js-picture-container"
        >
            <CloseBtn
                picContainerHandler={props.picContainerHandler}
            />

            <div className="picture-container__wrapper js-picture-container-wrapper">
                <div className="picture-container__author-wrapper">
                    <Author
                        authorName={props.currentAuthorName}
                        authorImg={props.currentAuthorImg}
                    />
                </div>

                <LikeBtn />

                <ContentImg
                    src={props.currentFullImg}
                    placeholder={props.currentImgPlaceholder}
                    alt={props.currentImgAlt}
                    setIsLoaded={props.setCurrentImgIsLoaded}
                    className="picture-container__content-img content-img js-picture-container-img"
                />

                <PublicationTime
                    time={props.currentPublicationTime}
                />
            </div>
        </div>
    )
}