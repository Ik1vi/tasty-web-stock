
import {combineReducers} from 'redux';

import publicationsReducer from './publications';
import likedPublicationsReducer from './likedPublications';
import currentUserReducer from './currentUser';


const rootReducer = combineReducers({
    publicationsReducer,
    likedPublicationsReducer,
    currentUserReducer
})
export default rootReducer;
