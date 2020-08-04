import {combineReducers} from 'redux';
import counter from './counterReducer';
import page from './pageReducer';
import cart from './cartReducer'


export default combineReducers({
  counter,
  page,
  cart
});