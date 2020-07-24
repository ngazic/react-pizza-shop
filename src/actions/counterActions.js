import {ADD_NUMBER} from './types';

export const addNumber = () => {
  return(dispatch) => {
    console.log('adding the one to counter');
    dispatch({
      type: ADD_NUMBER
    })
  }
}