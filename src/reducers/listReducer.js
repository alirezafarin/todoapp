import _ from 'lodash';

export default (state={}, action) => {

  switch( action.type ) {

    case 'ADD_TO_LIST':
      return { ...state, ...action.payload };

    case 'DELETE_ITEM':
      return { ..._.omit(state, action.payload) };

    case 'FETCH_LISTS':
      return { ...state, ...action.payload };

    case 'CHECK_ITEM':
      return { ...state, ...action.payload };  
      
    default:
      return state;  
  }
}