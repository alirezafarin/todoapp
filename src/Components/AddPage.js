import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { connect } from 'react-redux';

import { addToList } from '../actions';

class AddPage extends React.Component {

  state = { time: "", field: "", text: "", day: "", month: ""};

  componentDidMount() {
    let day = this.props.date.sDay;
    let month = this.props.date.month;

    this.setState({ day, month });
  }

  changeTime = (e) => {
    this.setState({ time: e.target.value });
  }

  changeField = (e) => {
    $(".dropdown-items").toggleClass("openDropDown");
    $(".dropdown-button i").toggleClass('dropdown-icon-down');
    if(e.target.dataset.value) {
      this.setState({ field: $(e.target).text() });
    }
  }

  changeText = (e) => {
    this.setState({ text: e.target.value });
  }

  renderTimeInput = () => {
    return(
      <div className="create-list-time border-bottom d-flex justify-content-around py-3">
        <label className="lead" htmlFor="time">ساعت :</label>
        <input id="time" className="form-control w-50 text-center" value={this.state.time} type="time" onChange ={ (e) => this.changeTime(e) }/>
      </div>
    );
  }

  renderFieldInput = () => {
    return(
      <div className="border-bottom pb-4">
        <div id="dropdown" className="dropdown-button mt-4 d-flex justify-content-between align-items-center" onClick={(e) => this.changeField(e)}>
          <span className="create-list-field">
            {this.state.field || "کارت تو چه زمینه ایه؟"}
          </span> 
          <span>
            <i className="fas fa-chevron-down"></i>
          </span>
          <div className="dropdown-items">
            <li data-value="sport">ورزش</li>
            <li data-value="study">درس</li>
            <li data-value="sleep">خواب</li>
            <li data-value="work">کار</li>
            <li data-value="movie">فیلم</li>
          </div>
        </div>
      </div>
    );
  }

  renderTextInput = () => {
    return(
      <div className="create-list-text d-flex justify-content-center p-4">
        <textarea type="text" className="form-control" value={this.state.text} rows="4" placeholder="در مورد کارت بنویس" onChange={(e) => this.changeText(e)}></textarea>
      </div>
    );
  }

  onSubmit = () => {
    if( this.state.time && this.state.field && this.state.text  ) {
      this.props.addToList(this.state);
    }
  }

  render() {

    return(
      <section id="add-page">
        <div className="add-page d-flex align-items-center justify-content-center">
          <div className="create-a-list">
            <div className="create-list-header border-bottom py-3">
              <h4 className="text-center text-secondary">اضافه کردن به لیست</h4>
            </div>
            <div className="create-list-date d-flex justify-content-around py-3 border-bottom">
              <span className="lead">تاریخ:</span>
              <span className="lead">{this.state.day} {this.state.month}</span>
            </div>
            {this.renderTimeInput()}
            {this.renderFieldInput()}
            {this.renderTextInput()}
            <div className="create-list-icons d-flex justify-content-around py-1">
              <span className="submit-list" onClick={this.onSubmit}>
                <i className="fas fa-check-circle"></i>
              </span>
              <Link to="/" className="discard-list text-danger">
                <i className="fas fa-chevron-left"></i>
              </Link>
            </div>  
          </div>
        </div>
      </section>
    );
  }

}

const mapStateToProps = (state) => {
  return { date: state.date };
}

export default connect(mapStateToProps, {
  addToList
})(AddPage);