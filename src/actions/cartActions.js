import {ADD_TO_CART, REMOVE_FROM_CART} from './types';


export function addItemToCart(payload) {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload
    })
  }
}

export function removeItemFromCart(payload) {
  return(dispatch)=>{
    dispatch({
      type: REMOVE_FROM_CART,
      payload
    })
  }
}