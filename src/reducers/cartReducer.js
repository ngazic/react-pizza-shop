import {ADD_TO_CART} from '../actions/types';

const initialState = {
  count: 0
};

export default function(state=initialState, action) {
  switch(action.type) {
    case ADD_TO_CART: {
      console.log('add to cart actions is called');
      let newState = {...state,count: state.count+1}
      return newState;
    }
    default: {
      return state;
    }
  }
}