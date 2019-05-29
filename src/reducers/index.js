import { combineReducers } from 'redux';
import docReducer from './docReducer';

export default combineReducers({
  doc: docReducer
});
