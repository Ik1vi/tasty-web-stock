import React from 'react';

import { PicGridItem } from '../components/PicGridItem.js';

export function Page(props) {
    const allItems = document.getElementsByClassName("pic-grid__list-item");
    const grid = document.querySelector(".js-pic-grid");

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
                    {props.publications.results.map((i) => 
                        <PicGridItem
                            key={i.id}
                            img={i.urls.small}
                            time={i.created_at}
                            authorName={i.user.name}
                            authorImg={i.user.profile_image.small}
                            resizeAllGridItems = {resizeAllGridItems}
                        />
                    )}
                </ul>
            </div>
        </main>
    );
}