import React from 'react';

export function PublicationTime(props) {
    let publicationDate = new Date(props.time).toLocaleString();

    return (
        <time className={props.className + " publication-time"}>
            {publicationDate}
        </time>
    );
}
