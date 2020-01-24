import firebase from "../../config/fbConfig";

const deleteDocument = (collection, docId) => {
  firebase
    .firestore()
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
