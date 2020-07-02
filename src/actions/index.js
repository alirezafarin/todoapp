import persianDate from 'persian-date';

import { 
    FETCH_DATE,
    SELECT_DAY,
    ADD_TO_LIST,
    FETCH_LISTS,
    DELETE_ITEM,
    CHECK_ITEM } from './actionTypes';
import db from '../db/firebase';

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
  return async (dispatch, getState) => {
    let state = getState().date;
    let day = state.sDay || state.day;
    let listObject = {...inputs, checked: false, day};
    let docRef = await db.collection('lists').add(listObject);
    dispatch({
      type: ADD_TO_LIST,
      payload: { [docRef.id]: { ...listObject, id: docRef.id } }
    });
  }
}

export const fetchLists = () => {
  let lists = {};
  return async (dispatch) => {
    let querySnapshot = await db.collection("lists").get();
    querySnapshot.forEach(function(doc) {
      lists[doc.id] = { ...doc.data(), id: doc.id };
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
      type: DELETE_ITEM,
      payload: id
    });
  }
}

export const checkItem = (id, checked) => {
  return async (dispatch, getState) => {
    await db.collection('lists').doc(id).update({
      checked
    });
    let listToCheck = getState().lists[id];

    dispatch({
      type: CHECK_ITEM,
      payload: { [id]: { ...listToCheck, checked } }
    });
  }
}
