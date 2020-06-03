import React from 'react';
import { Link } from 'react-router-dom';

const AddIcon = (props) => {

  if( !props.date.day ) {
    return "";
  }

  return(
    <div>
      <Link to={`add/${props.date.day}/${props.date.month}`} className="add-to-list-icon">
        <i className="fas fa-plus-circle"></i>
      </Link>
    </div>
  );

}

export default AddIcon;