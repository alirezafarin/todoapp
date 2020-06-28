import React from 'react';
import { connect } from 'react-redux';

import { addToList } from '../actions';

class AddToList extends React.Component {

  state = { text: '', time: '00:00' };

  onSubmit = (e) => {
    e.preventDefault();
    if( this.state.text && this.state.time ){
      this.props.addToList(this.state);
      this.setState({ text: '', time: '00:00' });
    }
  }

  render() {
    return(
      <section id="add-to-list">
        <form className="d-flex flex-column" onSubmit={(e) => this.onSubmit(e)}>
          <input
            className="form-control mb-2"
            type="text"
            value={this.state.text}
            placeholder="اضافه کردن به لیست"
            tabIndex="1"
            maxLength="22"
            required
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <div className="d-flex">
            <input
              className="time-input form-control w-50 text-center pl-4"
              type="time"
              value={this.state.time}
              tabIndex="2"
              required
              onChange={(e) => this.setState({ time: e.target.value })}
              pattern="[0-9]{2}:[0-9]{2}"
            />
            <button className="btn w-75 mr-2" type="submit">اضافه کردن</button>
          </div> 
        </form>
      </section>
    );
  }

}

export default connect( null, {
  addToList
})(AddToList);