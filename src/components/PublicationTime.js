import React from 'react';

export function PublicationTime(props) {
    let publicationDate = new Date(props.time).toLocaleString()
    return (
        <time className="publication__publication-time publication-time">{publicationDate}</time>        
    );
};
