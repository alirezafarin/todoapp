import React from 'react';

const ListItem = (props) => {

  const iconAndTitle = {
    "ورزش": "fas fa-volleyball-ball",
    "کار": "fas fa-briefcase",
    "درس": "fas fa-book",
    "فیلم": "fas fa-video",
    "خواب": "fas fa-bed"
  } 

  return(
    <div className="list-item d-flex pr-3 pb-2">
      <span className="list-item-icon">
        <i className={iconAndTitle[props.title]}></i>
      </span>
      <div className="list-item-content d-flex flex-column w-100 text-right pr-4">
        <div className="list-item-header">
          <span className="pl-3">{props.time}</span>
          <span>{props.title}</span>
        </div>
        <div className="list-item-body">
          {props.text}
        </div>
      </div>
    </div>
  );

}

export default ListItem;