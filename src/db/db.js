import db from './firebase';

export const addToDb = (data) => {
  db.collection('lists').add({
    data
  }).then((res) => console.log(res)).catch((err) => console.log(err));
}