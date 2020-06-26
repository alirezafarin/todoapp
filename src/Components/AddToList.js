import React from 'react';
import { connect } from 'react-redux';

import { addToList } from '../actions';

class AddToList extends React.Component {

  state = { text: '', minute: '', hour: '' };

  //FIXME:
  setTime = (e) => {
    let value = e.target.value;
    if( value.length > 2 ) {
      e.target.value = value.slice(1);
    }
    if( value.length === 1 ) {
      e.target.value = "0" + value;
    }
    if( value < 0 ) {
      e.target.value = "00";
    }
    if( e.target.dataset.type === 'minute' ) {
      if( e.target.value > 59 ) {
        e.target.value = '59';
      }
      this.setState({ minute: e.target.value });
    }
    else {
      if( e.target.value > 23 ) {
        e.target.value = '23';
      }
      this.setState({ hour: e.target.value });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if( this.state.text && this.state.hour && this.state.minute ){
      this.props.addToList(this.state);
      this.setState({ text: '', minute: '', hour: '' });
    }
  }

  render() {
    return(
      <section id="add-to-list">
        <form className="d-flex flex-column" onSubmit={(e) => this.onSubmit(e)}>
          <input
            className="form-control mb-2"
            value={this.state.text}
            type="text"
            placeholder="اضافه کردن به لیست"
            tabIndex="1"
            maxLength="22"
            required
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <div className="d-flex">
            <div className="input-group w-50">
              <input
                className="form-control w-25"
                value={this.state.minute}
                type="number"
                data-type="minute"
                placeholder="دقیقه"
                onChange={(e) => this.setTime(e)}
                tabIndex="3"
                required
              />
              <div className="input-group-append">
                <span className="input-group-text border rounded">:</span>
              </div>
              <input
                className="form-control w-25"
                value={this.state.hour}
                data-type="hour"
                type="number"
                placeholder="ساعت"
                onChange={(e) => this.setTime(e)}
                tabIndex="2"
                required
              />
            </div> 
            <button className="btn w-50 mr-2" type="submit">اضافه کردن</button>
          </div> 
        </form>
      </section>
    );
  }

}

export default connect( null, {
  addToList
})(AddToList);