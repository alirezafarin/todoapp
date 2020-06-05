import { combineReducers } from 'redux';

import listReducer from './listReducer';
import dateReducer from './dateReducer';

export default combineReducers({
  lists: listReducer,
  date: dateReducer
});