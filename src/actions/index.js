import persianDate from 'persian-date';

import { 
    FETCH_DATE,
    SELECT_DAY,
    ADD_TO_LIST,
    FETCH_LISTS,
    DELETE_ITEM } from './actionTypes';
import db from '../db/firebase';
import history from '../history';

export const fetchDate = () => {
  let date = new persianDate();    
  let year = date.format('YYYY');
  let month = date.format('MMMM');
  let day = date.calendar().day;
  let week = date.format('dddd');
  let dWeek = date.calendar().weekday;

  return {
    type: FETCH_DATE,
    payload: { year, month, day, week, dWeek }   
  }
}

export const selectDay = (day) => {

  return {
    type: SELECT_DAY,
    payload: day
  }
}

export const addToList = (inputs) => {
  return async (dispatch) => {
    await db.collection('lists').add({inputs});

    dispatch({
      type: ADD_TO_LIST,
    });

    history.push('/');
  }
}

export const fetchLists = () => {
  let lists = [];
  return async (dispatch) => {
    let querySnapshot = await db.collection("lists").get();
    querySnapshot.forEach(function(doc) {
      lists.push({ ...doc.data().inputs, id: doc.id });
    });

    dispatch({
      type: FETCH_LISTS,
      payload: lists
    });
  }
}

export const deleteItem = (id) => {
  return async (dispatch) => {
    await db.collection('lists').doc(id).delete();

    dispatch({
      type: DELETE_ITEM
    });
  }
}
