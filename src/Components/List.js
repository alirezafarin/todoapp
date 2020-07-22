import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

import ListItem from './ListItem';
import { fetchLists, deleteItem, checkItem } from '../actions';
import { animateOnClick } from '../animation';

class List extends React.Component {
  
  componentDidMount() {
    this.props.fetchLists();
  }

  componentDidUpdate() {
    if( !navigator.onLine ) {
      this.props.fetchLists();
    }
  }

  checkList = (e) => {
    let id = e.target.id;
    let checked = e.target.checked ? true : false;
    this.props.checkItem(id, checked);
  }

  renderList() {
    if(this.props.date.day) {
      let day = (this.props.date.sDay ? this.props.date.sDay : this.props.date.day);
      let lists = Object.values(this.props.lists);
      //sort todos by time
      lists.sort((a, b) => (a.hour + a.minute) - (b.hour + b.minute));
      return lists.map((toDo) => {
        if(toDo.day == day) {
          return(
            <ListItem
              key={toDo.id}
              id={toDo.id}
              hour={toDo.hour}
              minute={toDo.minute}
              text={toDo.text}
              checked={toDo.checked}
              checkList={this.checkList}
            />
          );
        }
      });
    }

  }
  
  deleteFromList = (e) => {
    if( e.target.id === 'delete-icon' ) {
      let node = $(e.target).closest('.list-item')[0];
      animateOnClick($('.delete-icon'), 'delete-clicked');
      let id = node.id;
      this.props.deleteItem(id);
    }
  }

  render() {
    return(
      <section id="list">
        <div className="list-items" onClick={(e) => this.deleteFromList(e)}>
          {this.renderList()}
        </div>
      </section>
    );
  }

}

const mapStateToProps = (state) => {
  return { lists: state.lists, date: state.date };
}

export default connect( mapStateToProps, {
  fetchLists,
  deleteItem,
  checkItem
} )(List);