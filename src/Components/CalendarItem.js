import React from 'react';

const CalendarItem = (props) => {
  
  let today = ""; 
  if( props.today ) {
    today = "today"; 
  }

  return(
    <div className="calender-item d-flex flex-column align-items-center">
      <span className="week">{props.weekDay}</span>
      <span className={`day ${today}`}>{props.monthDay}</span>
    </div>
  );

}

export default CalendarItem;