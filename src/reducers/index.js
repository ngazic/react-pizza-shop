import {combineReducers} from 'redux';
import counter from './counterReducer';
import page from './pageReducer';


export default combineReducers({
  counter,
  page
});