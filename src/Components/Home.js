import React from 'react';

import TopBar from './TopBar';
import SideNav from './SideNav';
import Calendar from './Calendar';
import List from './List';
import AddIcon from './AddIcon';

const Home = () => {

  return(
    <React.Fragment>
        <TopBar />
        <SideNav />
        <Calendar/>
        <List/>
        <AddIcon/>
    </React.Fragment>
  );
}

export default Home;