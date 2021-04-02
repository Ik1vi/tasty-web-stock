import { PUBLICATIONS_REQUESTED } from "../constants/action-types";

const initialState = {
    publications: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case PUBLICATIONS_REQUESTED:
            return {...state, publications: [...publications, action.publications]}
    
        default: return state;
    }

    // if (action.type === PUBLICATIONS_REQUESTED) {
    //     return Object.assign({}, state, {
    //         publications: state.publications.concat(action.publications)
    //     });
    // }

    // return state;
};

export default rootReducer;