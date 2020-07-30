import {ADD_NUMBER} from './types';

export const addNumber = () => {
  return(dispatch) => {
    dispatch({
      type: ADD_NUMBER
    })
  }
}