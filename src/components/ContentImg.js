import React, { useState, useEffect } from 'react';

export function ContentImg(props) {
    const [loading, setLoading] = useState(true);
    const [currentSrc, updateSrc] = useState(props.placeholder);

    useEffect(() => {
        // start loading original image
        const imageToLoad = new Image();
        imageToLoad.src = props.src;
        imageToLoad.onload = () => {
            // When image is loaded replace the src and set loading to false
            setLoading(false);
            updateSrc(props.src);
        }
    }, [props.src])

    return (
        <img
            onLoad={() => props.setIsLoaded(true)}
            className={props.className}
            src={currentSrc}
            style={{
                opacity: loading ? 0.5 : 1,
                filter: loading ? 'blur(10px)' : blur(0)
            }}
            alt={props.alt}
        />
    )
};