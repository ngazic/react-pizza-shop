import {SET_PAGE_TITLE} from "../actions/types";

let initialState = "Get it while it's hot";

function page(state=initialState, action) {
  switch (action.type) {
    case SET_PAGE_TITLE:
      {
        // debugger;
        let newTitle = (action.payload !==undefined) ? action.payload : state.page;
        if(newTitle === 'home') {
          newTitle=initialState;
        }
        return newTitle;
      }
      default:{
        return state;
      }
  }
}

export default page;