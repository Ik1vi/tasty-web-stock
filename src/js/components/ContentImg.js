import React, { useState, useEffect } from 'react';

export function ContentImg(props) {
    const [loading, setLoading] = useState(true);
    const [currentSrc, updateSrc] = useState(props.placeholder);

    useEffect(() => {
        let isSubscribed = true
        const imageToLoad = new Image();

        imageToLoad.src = props.src;
        imageToLoad.onload = () => {
            if (isSubscribed) {
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
}
