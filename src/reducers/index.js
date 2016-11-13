import { combineReducers } from 'redux';

import foodsReducer from './foodsReducer';
import authReducer from './auth-reducer';


const rootReducer = combineReducers({
  auth: authReducer,
  foods: foodsReducer,
});

export default rootReducer;
