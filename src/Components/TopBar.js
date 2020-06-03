import React from 'react';
import $ from 'jquery';

const TopBar = () => {

  const openSideNav = () => {
    $('#side-nav nav').addClass("open-sidenav");
  }

  return(
    <div id="top-bar" className="d-flex justify-content-between align-items-center text-light">
      <span className="bars-icon pr-2" onClick={openSideNav}>
        <i className="fas fa-bars"></i>
      </span>
      <span className="brand-name font-weight-bold pl-2">TODO</span>
    </div>
  );

}

export default TopBar;