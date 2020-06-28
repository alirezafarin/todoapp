import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";

const Modal = (props) => {

  $(document).click(function(e) {
    if( $(e.target)[0].id !== 'open-modal' && !$(e.target).closest(".modal-content")[0] ) {
      $(".modal").removeClass("open-modal");
    }
  });  
  
  return ReactDOM.createPortal(
    <div id="myModal" className="modal">
      <div className="modal-content">
        <h4 className="text-center pb-2 border-bottom">انتخاب ساعت</h4>
        <div className="clock d-flex justify-content-center" onClick={(e) => props.setTime(e)}>
          <div className="clock-minute d-flex flex-column align-items-center m-1">
            <span data-time="minute" data-dir="up" className="clock-arrow">
              +
            </span>
            <span className="minute-now">{props.minute}</span>
            <span data-time="minute" data-dir="down" className="clock-arrow">
              -
            </span>
          </div>
          <div className="clock-hour d-flex flex-column align-items-center m-1">
            <span data-time="hour" data-dir="up" className="clock-arrow">
              +
            </span>
            <span className="hour-now">{props.hour}</span>
            <span data-time="hour" data-dir="down" className="clock-arrow">
              -
            </span>
          </div>
        </div>
        <span className="add-button btn m-auto w-50" onClick={props.onSubmit}>اضافه کردن</span>
      </div>
    </div>,
    document.querySelector("#modal"));

}


export default Modal;