import { AUTHORIZE_USER, CLEAR_CURRENT_USER, CURRENT_USER_REQUESTED } from "../constants/action-types";

const initialState = {
    currentUser: null,
    authorized: JSON.parse(localStorage.getItem('authorized') || false),
    bearerToken: localStorage.getItem('bearerToken') || null 
};

function currentUserReducer(state = initialState, action) {
    switch (action.type) {

        case CURRENT_USER_REQUESTED:
            return { ...state, currentUser: action.currentUser }

        case CLEAR_CURRENT_USER:
            return { ...state, currentUser: null}

        case AUTHORIZE_USER:
            return { ...state, authorized: true, bearerToken: action.bearerToken}

        default: return state;
    }
};

export default currentUserReducer;
