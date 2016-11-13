import { ActionTypes } from '../actions';

const foodsReducer = (state = { all: [], meals: [] }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_FOODS:
      return { all: action.payload, meals: state.meals };
    case ActionTypes.FETCH_MEALS:
      return { all: state.all, meals: action.payload };
    default:
      return state;
  }
};

export default foodsReducer;
