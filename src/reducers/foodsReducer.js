import { ActionTypes } from '../actions';

const foodsReducer = (state = { all: [] }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_FOODS:
      return { all: action.payload, currentPost: state.currentPost };
    default:
      return state;
  }
};

export default foodsReducer;
