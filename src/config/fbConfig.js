import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyD3JkY8lRNuqFUMEL6IqBQ9gbrhrvob7RU",
  authDomain: "my-budget-fc50b.firebaseapp.com",
  databaseURL: "https://my-budget-fc50b.firebaseio.com",
  projectId: "my-budget-fc50b",
  storageBucket: "my-budget-fc50b.appspot.com",
  messagingSenderId: "503420271788",
  appId: "1:503420271788:web:cad2413dda92aea0907309",
  measurementId: "G-Z8749QH966"
};

/* const firebaseConfig = {
  apiKey: "AIzaSyD3JkY8lRNuqFUMEL6IqBQ9gbrhrvob7RU",
  authDomain: "my-budget-fc50b.firebaseapp.com",
  databaseURL: "https://my-budget-fc50b.firebaseio.com",
  projectId: "my-budget-fc50b",
  storageBucket: "my-budget-fc50b.appspot.com",
  messagingSenderId: "503420271788",
  appId: "1:503420271788:web:cad2413dda92aea0907309",
  measurementId: "G-Z8749QH966"
}; */
firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
