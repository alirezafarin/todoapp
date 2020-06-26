import React from 'react';

import TopBar from './TopBar';
import SideNav from './SideNav';
import Calendar from './Calendar';
import List from './List';
import AddtoList from './AddToList';

const Home = () => {

  return(
    <React.Fragment>
        <TopBar />
        <SideNav />
        <Calendar/>
        <AddtoList/>
        <List/>
    </React.Fragment>
  );
}

export default Home;