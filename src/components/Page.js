import React from 'react';

import { PicGridItem } from '../components/PicGridItem.js';

export function Page(props) {
    return (
        <main className="page">
            <div className="fixed-container">
                <ul className="page__pic-grid pic-grid js-pic-grid">
                    {props.publications.results.map((i) =>
                        <PicGridItem
                            key={i.id}
                            img={i.urls.small}
                            time={i.created_at}
                            authorName={i.user.name}
                            authorImg={i.user.profile_image.small}
                        />
                    )}
                </ul>
            </div>
		</main>
    );
}