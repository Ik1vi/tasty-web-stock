import { CURRENT_PUBLICATION, CURRENT_PUB_LIKE_EVENT } from "../constants/action-types";

const initialState = {
    currentPublication: {
        id: '',
        authorName: '',
        authorImg: '',
        authorHref: '',
        time: '',
        fullImg: '',
        src: '',
        placeholder: '',
        imgHref: '',
        alt: '',
        likes: 0,
        likedByUser: false
    }
};

function currentPublicationReducer(state = initialState, action) {
    switch (action.type) {

        case CURRENT_PUBLICATION:
            return {
                ...state,
                currentPublication: {
                    ...action.currentPublication
                }
            }

        case CURRENT_PUB_LIKE_EVENT:
            return {
                ...state,
                currentPublication: {
                    ...state.currentPublication, 
                    likes: action.totalLikes,
                    likedByUser: action.likeState
                }
            }

        default: return state;
    }
};

export default currentPublicationReducer;
