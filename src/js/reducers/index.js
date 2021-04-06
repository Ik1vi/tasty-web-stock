
import {combineReducers} from 'redux';

import publicationsReducer from './publications';
import likedPublicationsReducer from './likedPublications';
import currentUserReducer from './currentUser';
import currentPublicationReducer from './currentPublication'

const rootReducer = combineReducers({
    publicationsReducer,
    likedPublicationsReducer,
    currentUserReducer,
    currentPublicationReducer
})
export default rootReducer;
