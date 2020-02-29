import firebase from "../../config/fbConfig";

const getData = (collection, setExpenses) => {

  const user = firebase.auth().currentUser;

  firebase
    .firestore()
    .collection("users")
    .doc(user.uid)
    .collection(collection)
    .onSnapshot(function(querySnapshot) {
      const expensesFir = [];

      querySnapshot.forEach(function(doc) {
        expensesFir.push(doc);
      });
      setExpenses([...expensesFir]);
    });

};

export default getData;
