import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

import Modal from './Modal';
import { addToList } from '../actions';

class AddToList extends React.Component {

  state = { text: '', hour: '00', minute: '00' };

  onSubmit = () => {
    this.props.addToList(this.state);
    this.setState({ text: '' });
    $(".modal").removeClass('open-modal');
  }

  openModal = () => {
    if( this.state.text ){
      $(".modal").addClass('open-modal');
    }
  }

  setTime = (e) => {
    if(e.target.dataset.time) {
      let limit = { hour: 23, minute: 59 }
      let time = e.target.dataset.time;
      let arrow = e.target.dataset.dir;
      let timeNow = $(`.${time}-now`).text();
      let timeAfter = Number(timeNow);
      //add or subtract one
      (arrow === 'up') ? timeAfter ++ : timeAfter --;
      //if negative back to limit if limit back to zero
      let stateTime = (timeAfter < 0 ) ? String(limit[time])
                : (timeAfter <= 9) ? '0' + String(timeAfter)
                : (timeAfter > limit[time]) ? "00"
                : String(timeAfter);      

      this.setState({ [time]: stateTime });
    }
  }

  render() {
    return(
      <section id="add-to-list">
        <form className="d-flex align-items-center">
          <input
            className="form-control ml-3"
            type="text"
            value={this.state.text}
            placeholder="اضافه کردن به لیست"
            tabIndex="1"
            maxLength="22"
            required
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <span id="open-modal" onClick={this.openModal}>
            +
          </span>
        </form>
        <Modal
          setTime={this.setTime}
          hour={this.state.hour}
          minute={this.state.minute}
          onSubmit={this.onSubmit}  
        />
      </section>
    );
  }

}

export default connect( null, {
  addToList
})(AddToList);