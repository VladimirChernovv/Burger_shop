import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB3lgl5WRNH2j4Iqt7T_9bhQYgLYE1dKSM",
  authDomain: "burger-shop-1.firebaseapp.com",
  databaseURL: "https://burger-shop-1-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;