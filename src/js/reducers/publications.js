import { ERROR, IS_LOADING, PUBLICATIONS_REQUESTED, CLEAR_PUBLICATIONS } from "../constants/action-types";

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

        case IS_LOADING:
            return { ...state, isLoading: action.value }

        case ERROR:
            return { ...state, error: action.value }

        case CLEAR_PUBLICATIONS:
            return { ...state, publications: []}

        default: return state;
    }
};

export default publicationsReducer;
