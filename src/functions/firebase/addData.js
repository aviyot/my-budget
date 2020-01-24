import firebase from "../../config/fbConfig";

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
};

export { addToFirestore };
