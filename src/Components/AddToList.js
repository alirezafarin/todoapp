import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

import { animateOnClick } from '../animation';
import Modal from './Modal';
import { fetchLists, addToList } from '../actions';

class AddToList extends React.Component {

  state = { text: '', hour: '00', minute: '00' };

  componentDidUpdate() {
    //animate the add icon if text input not empty
    (this.state.text) ?
      $('#open-modal').addClass('add-active')
      : $('#open-modal').removeClass('add-active');
  }

  onSubmit = () => {
    this.props.addToList(this.state);
    this.setState({ text: '' });
    $(".modal").removeClass('open-modal');
    this.props.fetchLists();
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
      let AddOrSub = e.target.dataset.dir;
      let timeNow = $(`.${time}-now`).text();
      let timeAfter = Number(timeNow);
      //add or subtract one
      (AddOrSub === 'up') ? timeAfter ++ : timeAfter --;
      //if negative back to limit if limit back to zero
      let stateTime = (timeAfter < 0 ) ? String(limit[time])
                : (timeAfter <= 9) ? '0' + String(timeAfter)
                : (timeAfter > limit[time]) ? "00"
                : String(timeAfter);      

      this.setState({ [time]: stateTime });

      animateOnClick(`.${time}-now`, 'selected-time');
      animateOnClick(e.target, 'clicked-arrow');
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
          <span id="open-modal" className="add-icon" onClick={this.openModal}>
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
  fetchLists,
  addToList
})(AddToList);