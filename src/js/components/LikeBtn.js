import React from 'react';
import { connect } from 'react-redux';
import { updateLikeState } from '../actions/currentPublication';
import { dislike, like } from '../actions/publications';

const ConnectedLikeBtn = (props) => {
    const updateLikeState = () => {
        if (!props.authorized) {
            props.authorizeUser();
        } else {
            if (props.likeState) {
                props.dislike(props.id, props.totalLikes);
                props.updateLikeState(false, props.totalLikes - 1);
            } else {
                props.like(props.id, props.totalLikes);
                props.updateLikeState(true, props.totalLikes + 1);
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

const mapStateToProps = state => {
    return {
        authorized: state.currentUserReducer.authorized,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        like: (id, totalLikes) => dispatch(like(id, totalLikes)),
        dislike: (id, totalLikes) => dispatch(dislike(id, totalLikes)),

        updateLikeState: (likeState, totalLikes) => dispatch(updateLikeState(likeState, totalLikes))
    }
}

export const LikeBtn = connect(mapStateToProps, mapDispatchToProps)(ConnectedLikeBtn);
