import firebase from "../../config/fbConfig";

const getData = (collection, setExpenses) => {
  const unsubcribe = firebase
    .firestore()
    .collection(collection)
    .onSnapshot(function(querySnapshot) {
      const expensesFir = [];

      querySnapshot.forEach(function(doc) {
        expensesFir.push(doc);
      });
      setExpenses([...expensesFir]);
    });

  /*   firebase
    .firestore()
    .collection(collection)
    .onSnapshot(function(querySnapshot) {
      const expensesFir = [];
      querySnapshot.docChanges().forEach(function(change) {
        console.log(change.type,change.doc);
        
        if (change.type !== "removed") expensesFir.push(change.doc);
      });
      setExpenses([...expensesFir]);
    }); */
};

export default getData;
