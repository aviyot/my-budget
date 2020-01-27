import React, { useState } from "react";
import { addToFirestore } from "../functions/firebase/addData";
import deleteDocument from "../functions/firebase/deleteData";
import updateData from "../functions/firebase/updateData";


const DataAction = props => {

const [edit,setEdited] = useState(false);

  const handleClick = e => {
    const action = e.target.id;

    switch (action) {
      case "add":
        addToFirestore("expenses", props.expense);
        props.setDataAdded(true);
        break;
      case "edit":
        props.onEdit();
        setEdited(!edit);
        break;
      case "delete":
        deleteDocument("expenses", props.selectedExpense.id);
        break;
      case "update":
        updateData("expenses",props.selectedExpense.id,props.expense);
        props.setDataAdded(true);
        break;
      default:

    }
  };

  return (
    <div className="form-action">
      <input type="button" id="add" value="Add" onClick={handleClick} />
      <input
        type="button"
        id="delete"
/*         disabled={props.selectedId ? false : true}
 */ 
disabled = {!props.dataSelected}      
 value="Delete"
        onClick={handleClick}
      />
      <input
        type="button"
        id="edit" /* disabled={props.selectedExpense.id ?false:true} */
        value="Edit"
        disabled = {!props.dataSelected}
        onClick={handleClick}
      />
      <input type="button" id="update" disabled = {!edit} value="Update" onClick={handleClick} />
    </div>
  );
};

export default DataAction;
