import React from 'react';
import persianDate from 'persian-date';
import $ from 'jquery';

import ListItem from './ListItem';
import db from '../db/firebase';
import { removeFromDb } from '../db/db';

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
    if(this.state.day) {
      let day = (this.props.date.day ? this.props.date.day : this.state.day);
      return this.state.toDoList.map((toDo) => {
        if(toDo.day == day) {
          return(
            <ListItem key={toDo.id} id={toDo.id} title={toDo.field} time={toDo.time} text={toDo.text}/>
          );
        }
      });
    }

  }

  deleteItem = (e) => {
    let node = $(e.target).closest('.list-item')[0];
    let id = node.id;
    removeFromDb(id);
    $(node).remove();
  }

  render() {
    return(
      <section id="list">
        <div className="list-items" onClick={(e) => this.deleteItem(e)}>
          {this.renderList()}
        </div>
      </section>
    );
  }

}

export default List;