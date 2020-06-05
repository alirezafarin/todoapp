import React from 'react';

const CalendarItem = (props) => {
  
  let today = ""; 
  if( props.today ) {
    today = "today"; 
  }

  let sDay = "";
  if( props.sDay ) {
    sDay = "selected-day";
  }

  return(
    <div className="calender-item d-flex flex-column align-items-center">
      <span className="week">{props.weekDay}</span>
      <span className={`day ${today} ${sDay}`}>{props.monthDay}</span>
    </div>
  );

}

export default CalendarItem;