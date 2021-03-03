
import React from 'react';
import { PicItem } from '../components/PicItem.js';

export function Page(props) {
    const allItems = document.getElementsByClassName('pic-grid__list-item');
    const grid = document.querySelector('.js-pic-grid');

    let resizeGridItem = function (item) {
        let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));

        let rowSpan = Math.ceil((item.querySelector('.js-publication').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
        item.style.gridRowEnd = "span " + rowSpan;
    }

    let resizeAllGridItems = function (i) {
        for (i = 0; i < allItems.length; i++) {
            resizeGridItem(allItems[i]);
        }
    }

    return (
        <main className="page">
            <div className="fixed-container">
                <ul className="page__pic-grid pic-grid js-pic-grid">
                    {props.publications.map((p, i) => {
                        return <PicItem
                            key={p.id}
                            id={p.id}

                            blurHash={p.blur_hash}

                            src={p.urls.regular}
                            fullImg={p.urls.full}
                            placeholder={p.urls.thumb}
                            color={p.color}
                            alt={p.alt_description}
                            imgHref={p.links.html}

                            likes={p.likes}
                            likedByUser={p.liked_by_user}

                            time={p.created_at}

                            authorName={p.user.name}
                            authorImg={p.user.profile_image.small}
                            authorHref={p.user.links.html}

                            listItemClassName="pic-grid__list-item"
                            publicationClassName="pic-grid__publication"

                            authorized={props.authorized}
                            authorizeUser={props.authorizeUser}

                            unsplash={props.unsplash}

                            resizeAllGridItems={resizeAllGridItems}
                            picContainerHandler={props.picContainerHandler}

                            setPicContainerIsVisible={props.setPicContainerIsVisible}

                            updateLikeState={props.updateLikeState}

                            ref={(props.publications.length === i + 1) ? props.lastElementRef : null}
                        />
                    }
                    )}
                </ul>

                {props.loading ? (
                    <div className="page__loading loading">
                        ...loading
                    </div>
                ) : (null)}
            </div>
        </main>
    );
}
