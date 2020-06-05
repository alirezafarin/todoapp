export default (state={}, action) => {
  switch( action.type ) {
    case 'FETCH_DATE':
      return { ...state, ...action.payload };

    case 'SELECT_DAY':
      return { ...state, sDay: action.payload };  

    default:
      return state;  
  }
}