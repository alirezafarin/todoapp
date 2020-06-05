import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

import ListItem from './ListItem';
import { fetchLists, deleteItem } from '../actions';

class List extends React.Component {
  
  componentDidMount() {
    this.props.fetchLists();
  }

  renderList() {
    if(this.props.date.day) {
      let day = (this.props.date.sDay ? this.props.date.sDay : this.props.date.day);
      return this.props.lists.map((toDo) => {
        if(toDo.day == day) {
          return(
            <ListItem key={toDo.id} id={toDo.id} title={toDo.field} time={toDo.time} text={toDo.text}/>
          );
        }
      });
    }

  }
  
  //FIXME:
  deleteFromList = (e) => {
    let node = $(e.target).closest('.list-item')[0];
    let id = node.id;
    // this.props.deleteItem(id);
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
  deleteItem
} )(List);