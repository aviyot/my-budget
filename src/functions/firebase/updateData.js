import firebase from "../../config/fbConfig";


const updateData = (collection,id,expense) =>{

    console.log(expense);
    const user = firebase.auth().currentUser;

    firebase
    .firestore()
    .collection("users")
    .doc(user.uid)
    .collection(collection)
    .doc(id)
    .update({
        ...expense
    })
    .then(function() {
        console.log("Document successfully updated!");

    })
    .catch(function(error) {
      // The document probably doesn't exist.
    console.error("Error updating document: ", error);
    });


/* 
    var washingtonRef = db.collection("cities").doc("DC");

// Set the "capital" field of the city 'DC'
return washingtonRef.update({
    capital: true
})
.then(function() {
    console.log("Document successfully updated!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
}); */

}


export default updateData;