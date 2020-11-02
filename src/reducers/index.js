import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import imagesReducer from './imagesReducer';
import pageReducer from './pageReducer';
const rootReducer = combineReducers({
    isloading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
    nextPage: pageReducer,
})
export default rootReducer;