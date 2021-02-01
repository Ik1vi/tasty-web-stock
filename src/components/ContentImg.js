import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export function ContentImg(props) {

    return (
        <LazyLoadImage
            className="content-img"
            beforeLoad={() => console.log('loaded')}
            alt={props.altDescription}
            effect="blur"
            src={props.img}
        />
    );
};
