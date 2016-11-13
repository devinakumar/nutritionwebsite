import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import foodsReducer from './foodsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  foods: foodsReducer,
});

export default rootReducer;
