import React from 'react';

import TopBar from './TopBar';
import SideNav from './SideNav';
import Calendar from './Calendar';
import List from './List';
import AddIcon from './AddIcon';

class Home extends React.Component {

  state = { date: {} };
  
  recieveDate = (month, day) => {
    this.setState({date: {month, day}});
  }

  render() {
    return(
      <React.Fragment>
          <TopBar />
          <SideNav />
          <Calendar sendDate={this.recieveDate}/>
          <List date={this.state.date}/>
          <AddIcon date={this.state.date}/>
      </React.Fragment>
    );
  }

}

export default Home;