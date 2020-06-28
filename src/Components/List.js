import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

import ListItem from './ListItem';
import { fetchLists, deleteItem, checkItem } from '../actions';

class List extends React.Component {
  
  componentDidMount() {
    this.props.fetchLists();
  }

  componentDidUpdate() {
    this.props.fetchLists();
  }

  checkList = (e) => {
    let id = e.target.id;
    let checked = e.target.checked ? true : false;
    this.props.checkItem(id, checked);
  }

  renderList() {
    if(this.props.date.day) {
      let day = (this.props.date.sDay ? this.props.date.sDay : this.props.date.day);
      //sort todos by time
      this.props.lists.sort((a, b) => {
        let timeA = a.time.split(':');
        let timeB = b.time.split(':');

        return (timeA.join('')) - (timeB.join(''));
      });
      return this.props.lists.map((toDo) => {
        if(toDo.day == day) {
          return(
            <ListItem
              key={toDo.id}
              id={toDo.id}
              time={toDo.time}
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
  return { lists: state.lists.lists, date: state.date };
}

export default connect( mapStateToProps, {
  fetchLists,
  deleteItem,
  checkItem
} )(List);