import {ADD_NUMBER} from "../actions/types";

let initialCounter = {counter: 0};

function counter(state=initialCounter, action) {
  switch (action.type) {
    case ADD_NUMBER:
      {
        console.log("Reducer: you are adding the number");
        console.log(state)
        let newState = {
          counter: state.counter + 1
        };
        return newState;
      }
      default:{
        console.log('default case from the reducer ')
        return state;
      }
  }
}

export default counter;