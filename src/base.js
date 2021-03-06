import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB3lgl5WRNH2j4Iqt7T_9bhQYgLYE1dKSM",
  authDomain: "burger-shop-1.firebaseapp.com",
  databaseURL: "https://burger-shop-1-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;