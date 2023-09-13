import { combineReducers } from 'redux';

const numbers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  numbers,
});

export default rootReducer;