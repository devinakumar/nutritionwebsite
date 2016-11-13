import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import foodsReducer from './foodsReducer';
import authReducer from './auth-reducer';


const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
  foods: foodsReducer,
});

export default rootReducer;
