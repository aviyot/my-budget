import firebase from "../../config/fbConfig";

const getData = (collection, setData) => {

  const user = firebase.auth().currentUser;
  if(user){

    firebase
    .firestore()
    .collection("users")
    .doc(user.uid)
    .collection(collection)
    .onSnapshot(function(querySnapshot) {
      const data = [];

      querySnapshot.forEach(function(doc) {
        data.push(doc);
      });
      setData([...data]);
    });

  }

};

export default getData;
