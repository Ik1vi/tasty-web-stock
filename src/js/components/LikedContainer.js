import React from 'react';

import { connect } from 'react-redux';

import { PicItem } from '../components/PicItem.js';
import { CloseBtn } from '../components/CloseBtn.js'

const connectedLikedContainer = (props) => {
    return (
        <div className="liked-container js-liked-container">
            <CloseBtn
                className="liked-container__btn-close"
                
                setPicContainerIsOpen={props.setPicContainerIsOpen}
                setPicContainerIsVisible={props.setPicContainerIsVisible}
                setLikedContainerIsOpen={props.setLikedContainerIsOpen}
            />

            <div className="liked-container__wrapper js-liked-wrapper">
                <h2 className="liked-container__title">Вы отметили эти публикации:</h2>

                <ul className="liked-container__list">
                    {props.likedPublications.map((p) => {
                        return <PicItem
                            key={p.id}
                            id={p.id}

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

                            listItemClassName='liked-container__item'
                            publicationClassName='liked-container__publication'

                            picContainerHandler={props.picContainerHandler}
                            setPicContainerIsVisible={props.setPicContainerIsVisible}

                            authorizeUser={props.authorizeUser}

                            checkLikedContainer={true}

                            ref={null}
                        />
                    }
                    )}
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        likedPublications: state.likedPublicationsReducer.likedPublications,
    }
}

export const LikedContainer = connect(mapStateToProps)(connectedLikedContainer);
