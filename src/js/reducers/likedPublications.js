import { CLEAR_LIKED_PUBLICATIONS, LIKED_PUBLICATIONS_REQUESTED, LIKED_PUB_ERROR, LIKED_PUB_IS_LOADING } from "../constants/action-types";

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

        case LIKED_PUB_IS_LOADING:
            return { ...state, isLoading: action.value }

        case LIKED_PUB_ERROR:
            return { ...state, error: action.value }

        case CLEAR_LIKED_PUBLICATIONS:
            return { ...state, likedPublications: []}

        default: return state;
    }
};

export default likedPublicationsReducer;
