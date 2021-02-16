import React, { useState, useEffect } from 'react';

export function ContentImg(props) {
    const [loading, setLoading] = useState(true);
    // const [currentSrc, updateSrc] = useState(decodeBlurHash(props.blurHash));
    const [currentSrc, updateSrc] = useState(props.placeholder);

    useEffect(() => {
        // start loading original image
        // console.log(decodeBlurHash(props.blurHash))
        let isSubscribed = true
        const imageToLoad = new Image();

        imageToLoad.src = props.src;
        imageToLoad.onload = () => {
            if (isSubscribed) {
                // When image is loaded replace the src and set loading to false
                setLoading(false);
                updateSrc(props.src);
            }
        }
        return () => isSubscribed = false;
    }, [props.src])

    return (
        <img
            onLoad={() => props.setIsLoaded(true)}
            className={props.className + " content-img"}
            src={currentSrc}
            style={{
                opacity: loading ? 0.5 : 1,
                filter: loading ? 'blur(10px)' : blur(0)
            }}
            alt={props.alt}
        />
    )
};