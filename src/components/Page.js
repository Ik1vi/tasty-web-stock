
import React from 'react';

import { PicGridItem } from '../components/PicGridItem.js';

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
                <ul
                    className="page__pic-grid pic-grid js-pic-grid"
                    onLoad={resizeAllGridItems()}
                >
                    {props.publications.map((p, i) => {
                        if (props.publications.length === i + 1) {

                            return <PicGridItem
                                key={p.id}

                                src={p.urls.small}
                                fullImg={p.urls.raw}
                                placeholder={p.urls.thumb}
                                color={p.color}
                                alt={p.alt_description}

                                time={p.created_at}

                                authorName={p.user.name}
                                authorImg={p.user.profile_image.small}

                                setCurrentAuthorName={props.setCurrentAuthorName}
                                setCurrentAuthorImg={props.setCurrentAuthorImg}

                                resizeAllGridItems={resizeAllGridItems}
                                picContainerHandler={props.picContainerHandler}
                                ref={props.lastElementRef}
                            />
                        } else {
                            return <PicGridItem
                                key={p.id}

                                src={p.urls.small}
                                fullImg={p.urls.full}
                                placeholder={p.urls.thumb}
                                color={p.color}
                                alt={p.alt_description}

                                time={p.created_at}

                                authorName={p.user.name}
                                authorImg={p.user.profile_image.small}

                                resizeAllGridItems={resizeAllGridItems}
                                picContainerHandler={props.picContainerHandler}

                                ref={null}
                            />
                        }
                    }

                    )}
                </ul>
            </div>
        </main>
    );
}