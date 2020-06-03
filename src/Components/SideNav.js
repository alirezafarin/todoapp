import React from 'react';
import $ from 'jquery';

const SideNav = () => {

  // close sidenav on click outside
  $(document).click(function(e) {
    if( !$(e.target).hasClass("fa-bars") && !$(e.target).closest("#side-nav")[0] ) {
      $("#side-nav nav").removeClass("open-sidenav");
    }
  });

  return(
    <div id="side-nav">
      <nav className="sidenav">
        <span className="side-brand-name text-center">TO<span className="font-weight-bold">DO</span></span> 
        <a className="mt-5" href="#">پروفایل کاربری</a>
        <a href="#">قوانین و مقررات</a>
        <a href="#">راهنمای استفاده</a>
      </nav>
    </div>
  );

}

export default SideNav;