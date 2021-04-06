import { PUBLICATIONS_REQUESTED, CLEAR_PUBLICATIONS, DISLIKE, LIKE, PUB_ERROR, PUB_IS_LOADING } from "../constants/action-types";

const initialState = {
    publications: [],
    totalPages: 0,
    isLoading: false,
    error: null,
};

function publicationsReducer(state = initialState, action) {
    switch (action.type) {
        case PUBLICATIONS_REQUESTED:
            return {
                ...state,
                publications: [...state.publications, ...action.publications],
                totalPages: action.totalPages,
            }

        case PUB_IS_LOADING:
            return { ...state, isLoading: action.value }

        case PUB_ERROR:
            return { ...state, error: action.value }

        case CLEAR_PUBLICATIONS:
            return { ...state, publications: [] }

        case LIKE:
            return {
                ...state,
                publications: state.publications.map(pub => pub.id == action.pubId ?
                    { ...pub, liked_by_user: action.liked, likes: pub.likes + 1 } :
                    pub
                )
            }

        case DISLIKE:
            return {
                ...state,
                publications: state.publications.map(pub => pub.id == action.pubId ?
                    { ...pub, liked_by_user: action.liked, likes: pub.likes - 1 } :
                    pub
                )
            }

        default: return state;
    }
};

export default publicationsReducer;
