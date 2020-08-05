import {ADD_TO_CART} from '../actions/types';

const initialState = {
  count: 0
};

export default function(state=initialState, action) {
  function addPizzaToCart(payload,oldState) {
    let newPizza = {};
    newPizza[payload.title] = {};
    newPizza[payload.title].image = payload.image;
    if( oldState.hasOwnProperty(payload.title)) {
      newPizza[payload.title] = oldState[payload.title];
      if(oldState[payload.title].hasOwnProperty(payload.size)) {
        newPizza[payload.title][payload.size].count += 1; 
      }
      else {
        newPizza[payload.title][payload.size] = {
          price: payload.price,
          count: 1
        };
      }

    }else {
      newPizza[payload.title][payload.size] = {
        price: payload.price,
        count: 1
      };
    }
    return newPizza;
    }
  switch(action.type) {
    case ADD_TO_CART: {
      console.log('add to cart actions is called');
      console.log(action);
      console.log(state)
      let newState = {...state,count: state.count+1, ...addPizzaToCart(action.payload, state)}
      console.log(newState)
      return newState;
    }
    default: {
      return state;
    }
  }
}