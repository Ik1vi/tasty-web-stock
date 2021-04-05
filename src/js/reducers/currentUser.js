import { CLEAR_CURRENT_USER, CURRENT_USER_REQUESTED } from "../constants/action-types";

const initialState = {
    currentUser: null,
};

function currentUserReducer(state = initialState, action) {
    switch (action.type) {

        case CURRENT_USER_REQUESTED:
            return { ...state, currentUser: action.currentUser }

        case CLEAR_CURRENT_USER:
            return { ...state, currentUser: null}

        default: return state;
    }
};

export default currentUserReducer;
