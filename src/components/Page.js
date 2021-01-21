import React from 'react';

import { PicGridItem } from '../components/PicGridItem.js';

export function Page() {
    const [publications, setPublications] = React.useState(
            JSON.parse(localStorage.publications || '[]')
        );

    return (
        <main className="page">
            <div className="fixed-container">
                <ul className="page__pic-grid pic-grid js-pic-grid">
                    {publications.map((i) =>
                        <PicGridItem
                            key={i}
                        />
                    )}
                </ul>
            </div>
		</main>
    );
}