import { combineReducers } from 'redux';
import docReducer from './docReducer';

/* 
  If multiple reducers, combine
*/

export default combineReducers({
  doc: docReducer
});
