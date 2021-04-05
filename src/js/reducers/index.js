
import {combineReducers} from 'redux';

import publicationsReducer from './publications';
import likedPublicationsReducer from './likedPublications';


const rootReducer = combineReducers({
    publicationsReducer,
    likedPublicationsReducer
})
export default rootReducer;
