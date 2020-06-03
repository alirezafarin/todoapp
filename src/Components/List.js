import React from 'react';
import persianDate from 'persian-date';
import db from '../db/firebase';

import ListItem from './ListItem';

class List extends React.Component {

  state = { toDoList : [], day: "" };
  
  componentDidMount() {

    let date = new persianDate();
    let day = date.calendar().day;

    let addState = (toDoList) => {
      this.setState({ toDoList, day });
    }

    db.collection("lists").get().then(function(querySnapshot) {
      let data = [];
      querySnapshot.forEach(function(doc) {
        data.push({ ...doc.data().data, id: doc.id });
        });
      addState(data);
    });
  }

  renderList() {
    console.log(this.state);
    if(this.state.day) {
      let day = (this.props.date.day ? this.props.date.day : this.state.day);
      return this.state.toDoList.map((toDo) => {
        if(toDo.day == day) {
          return(
            <ListItem key={toDo.id} title={toDo.field} time={toDo.time} text={toDo.text}/>
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