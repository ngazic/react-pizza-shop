import {ADD_NUMBER} from "../actions/types";

let initialCounter = 0;

function counter(state=initialCounter, action) {
  switch (action.type) {
    case ADD_NUMBER:
      {
        let newState = state + 1;
        return newState;
      }
      default:{
        return state;
      }
  }
}

export default counter;