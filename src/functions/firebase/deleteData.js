import firebase from "../../config/fbConfig";

const deleteDocument = (collection, docId) => {
  
  const user = firebase.auth().currentUser;

  firebase
    .firestore()
    .collection("users")
    .doc(user.uid)
    .collection(collection)
    .doc(docId)
    .delete()
    .then(() => {
      console.log("deleted");
    })
    .catch(() => {
      console.log("deleted error");
    });
};

export default deleteDocument;
