import React from 'react';

const ListItem = (props) => {

  return(
    <div id={props.id} className="list-item d-flex align-items-center justify-content-start pr-4 border-bottom">
      <input
        className="checkbox"
        type="checkbox"
        id={props.id}
        checked={props.checked}
        onChange={(e) => props.checkList(e)}
      />
      <label className="list-item-info d-flex flex-column py-2 text-right" htmlFor={props.id}>
        <span className="list-item-text">{props.text}</span>
        <span className="list-item-time text-right">{props.hour}:{props.minute}</span>
      </label>
      <span className="delete-icon mr-auto"><i id="delete-icon" className="fa fa-times"></i></span>
    </div>
  );

}

export default ListItem;