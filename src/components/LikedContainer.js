import React from 'react';

import { PicItem } from '../components/PicItem.js';
import { CloseBtn } from '../components/CloseBtn.js'

export function LikedContainer(props) {
    return (
        <div className="liked-container js-liked-container">
            <CloseBtn
                className="liked-container__btn-close"
                bodyEl={props.bodyEl}
                setPicContainerIsOpen={props.setPicContainerIsOpen}
                setPicContainerIsVisible={props.setPicContainerIsVisible}
            />

            <div className="liked-container__wrapper js-liked-wrapper">

                <h2 className="liked-container__title">Вы отметили эти публикации:</h2>

                <ul className="liked-container__list">
                    {props.likedPublications.map((p) => {
                        return <PicItem
                            key={p.id}

                            src={p.urls.regular}
                            fullImg={p.urls.full}
                            placeholder={p.urls.thumb}
                            color={p.color}
                            alt={p.alt_description}

                            likes={p.likes}
                            likedByUser={p.liked_by_user}

                            time={p.created_at}

                            authorName={p.user.name}
                            authorImg={p.user.profile_image.small}
                            authorHref={p.user.links.html}

                            listItemClassName='liked-container__item'
                            publicationClassName='liked-container__publication'

                            picContainerHandler={props.picContainerHandler}
                            setPicContainerIsVisible={props.setPicContainerIsVisible}

                            authorized={props.authorized}
                            authorizeUser={props.authorizeUser}

                            unsplash={props.unsplash}

                            checkLikedContainer = {true}

                            ref={null}
                        />
                    }
                    )}
                </ul>
            </div>
        </div>
    );
}
