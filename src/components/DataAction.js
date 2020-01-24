import React, { useState } from "react";
import { addToFirestore } from "../functions/firebase/addData";
import deleteDocument from "../functions/firebase/deleteData";

const DataAction = props => {
  const [edit, setEdit] = useState(false);

  const handleClick = e => {
    const action = e.target.id;

    switch (action) {
      case "add":
        addToFirestore("expenses", props.expense);
        break;
      case "edit":
        props.onEdit();
        break;
      case "delete":
        deleteDocument("expenses", props.selectedExpense.id);
        break;
      case "update":
        console.log(action);
        break;
    }
  };

  return (
    <div className="form-action">
      <input type="button" id="add" value="Add" onClick={handleClick} />
      <input
        type="button"
        id="delete"
        disabled={props.selectedId ? false : true}
        value="Delete"
        onClick={handleClick}
      />
      <input
        type="button"
        id="edit" /* disabled={props.selectedExpense.id ?false:true} */
        value="Edit"
        onClick={handleClick}
      />
      <input type="button" id="update" value="Update" onClick={handleClick} />
    </div>
  );
};

export default DataAction;
