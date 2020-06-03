import React from 'react';
import persianDate from 'persian-date';

import ListItem from './ListItem';

class List extends React.Component {

  state = { toDoList : [], day: "" };

  componentDidMount() {
    
  }

  renderList() {
    if(this.state.day) {
      let day = (this.props.date.day ? this.props.date.day : this.state.day);
      return this.state.toDoList.map((toDo) => {
        if(toDo.day == day) {
          return(
            <ListItem title={toDo.field} time={toDo.time} text={toDo.text}/>
          );
        }
      });
    }

  }

  render() {
    return(
      <section id="list">
        <div className="list-items">
          {this.renderList()}
        </div>
      </section>
    );
  }

}

export default List;