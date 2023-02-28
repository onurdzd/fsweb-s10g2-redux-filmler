import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteReducer from "./favoriteReducer"

const rootReducer = combineReducers({
    mainMovie:movieReducer,
    favorite:favoriteReducer
})

export default rootReducer;