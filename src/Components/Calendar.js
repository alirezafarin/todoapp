import React from 'react';
import $ from 'jquery';
import persianDate from 'persian-date';

import CalendarItem from './CalendarItem';

class Calendar extends React.Component {

  state = { year: "", month: "", week: "", dWeek: "", day: "", sDay: "" };

  componentDidMount() {
    let date = new persianDate();    
    let year = date.format('YYYY');
    let month = date.format('MMMM');
    let day = date.calendar().day;
    let week = date.format('dddd');
    let dWeek = date.calendar().weekday;

    this.setState({ year, month, week, dWeek, day });
  }

  selectDay = (e) => {
    if( $(e.target).hasClass("day") ) {
      $(".selected-day").removeClass("selected-day");
      $(e.target).addClass("selected-day");
      let sDay = $(e.target).text();
      this.setState({ sDay });
      this.props.sendDate(this.state.month, sDay); //send date to parent(Home.js)
    }
  }

  renderCalenderItem = () => {
    if( this.state.year ) {
      let weekDays = [ "جمعه", "پنج", "چهار", "سه", "دو", "یک", "شنبه" ];
      return [1, 2, 3, 4, 5, 6, 7].map((i) => {
        let day = this.state.day - ( this.state.dWeek - i );
        return(
          <CalendarItem key={day} weekDay={weekDays[7-i]} monthDay={day} today={this.state.day === day} />
        );
      });
    }
  }

  render() {
    return(
      <section id="calender">
        <div className="text-light">
          <div className="calender-top d-flex align-items-center justify-content-around">
            <div className="top-date">
              <div className="top-week text-center">
                {this.state.week}
              </div>
              <div className="top-month">
                {this.state.year} {this.state.month}
              </div>
            </div>
            <div className="top-day">
              {this.state.day}
            </div>
          </div> 
          <div className="calender-bottom d-flex justify-content-between" onClick={(e) => this.selectDay(e)}>
            {this.renderCalenderItem()}
          </div>
        </div>
      </section>
    );
  }
}

export default Calendar;