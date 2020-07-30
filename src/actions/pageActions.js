import {SET_PAGE_TITLE} from './types';

export const setTitle = (payload) => {
  return (dispatch) => {
    dispatch({
      type: SET_PAGE_TITLE,
      payload: payload
    })
  }
}