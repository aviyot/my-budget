import firebase from "../../config/fbConfig";



/* 
const addToFirestore = (collection, data) => {
  console.log(data, collection);
  firebase
    .firestore()
    .collection(collection)
    .add(data)
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
}; */


const addToFirestore = (collection, data) => {

  const user = firebase.auth().currentUser;

  if(data.name && data.amount) {
  firebase
    .firestore()
    .collection("users")
    .doc(user.uid)
    .collection(collection)
    .add(data)
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
}
else {
  console.log("Enter Expense Name and Amount");
}
};
export { addToFirestore };
