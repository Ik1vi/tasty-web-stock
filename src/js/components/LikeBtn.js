import React from 'react';
import { connect } from 'react-redux';
import { dislike, like } from '../actions/publications';

export function ConnectedLikeBtn(props) {
    const updateLikeState = () => {
        if (!props.authorized) {
            props.authorizeUser();
        } else {
            if (props.likeState) {
                props.dislike(props.id, props.totalLikes)
            } else {
                props.like(props.id, props.totalLikes)
            }
        }
    }

    return (
        <div className={props.className + " like"}>
            <p className="like__total-likes">{props.totalLikes}</p>

            <button
                className={"like__btn js-like" + (props.likeState ? " like__btn--liked" : '')}
                aria-label={(props.likeState ? "Отметить публикацию" : 'Снять отметку с публикации')}
                type="button"
                onClick={() => {
                    updateLikeState()
                }}
            ></button>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        like: (id, totalLikes) => dispatch(like(id, totalLikes)),
        dislike: (id, totalLikes) => dispatch(dislike(id, totalLikes))
    }
}

export const LikeBtn = connect(null, mapDispatchToProps)(ConnectedLikeBtn);

