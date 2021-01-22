import React from 'react';

export function PublicationTime(props) {
    return (
        <time className="publication__publication-time publication-time">{props.time}</time>        
    );
};
