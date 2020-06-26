export default (state={ lists: [] }, action) => {

  switch( action.type ) {

    case 'ADD_TO_LIST':
      return { ...state };

    case 'DELETE_ITEM':
      return { ...state };

    case 'FETCH_LISTS':
      return { ...state, lists: action.payload };

    case 'CHECK_ITEM':
      return { ...state };  
      
    default:
      return state;  
  }
}