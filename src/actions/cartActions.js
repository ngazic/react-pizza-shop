import {ADD_TO_CART} from './types';

export function addItemToCart(payload) {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload
    })
  }
}