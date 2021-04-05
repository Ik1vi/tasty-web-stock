import { CLEAR_LIKED_PUBLICATIONS, ERROR, IS_LOADING, LIKED_PUBLICATIONS_REQUESTED } from "../constants/action-types";

const initialState = {
    likedPublications: [],
    isLoading: false,
    error: null,
};

function likedPublicationsReducer(state = initialState, action) {
    switch (action.type) {

        case LIKED_PUBLICATIONS_REQUESTED:
            return {
                ...state, likedPublications: [...state.likedPublications, ...action.likedPublications]
            }

        case IS_LOADING:
            return { ...state, isLoading: action.value }

        case ERROR:
            return { ...state, error: action.value }

        case CLEAR_LIKED_PUBLICATIONS:
            return { ...state, likedPublications: []}

        default: return state;
    }
};

export default likedPublicationsReducer;
