import React, { useState,useContext,createContext} from "react";
import { addToFirestore } from "../functions/firebase/addData";
import deleteDocument from "../functions/firebase/deleteData";
import updateData from "../functions/firebase/updateData";
import ExpensesContext from "../contexts/contextStore";

import DataActionContext from "../contexts/dataActionContext"


const DataAction = props => {

//const { dispatch, expense } = useContext(ExpensesContext);
const { dispatch ,dataUI } = useContext(DataActionContext);


const [isFormOpen,setIsFormOpen] = useState(false);

  const handleClick = e => {
    const action = e.target.id;

    switch (action) {
      case "add":
        addToFirestore("expenses", props.expense); 
        props.setDataAdded(true);
      
        break;
      case "edit":
        dispatch({type:"ON_EDIT"})
        //props.onEdit();
        
      /*   setEdited(preEdit => {
            console.log(preEdit);
          if(!preEdit)
            props.onEdit(!preEdit);
          else
            props.onEdit(preEdit)

          return !preEdit
        })
         */
        break;
      case "delete":
        deleteDocument("expenses", dataUI.selectedExpense.id);
        break;
      case "update":
        updateData("expenses",dataUI.selectedExpense.id,props.expense);
        props.setDataAdded(true);
        break;
      case "add_new":
        dispatch({type:"OPEN_FORM"})
      default:

    }
  };

  return (
    <div className="form-action">

      {dataUI.isFormOpen ? 
      <input type="button" id="add" value="Add" onClick={handleClick} />:
      <input type="button" id="add_new" value="Add New Expense" onClick={handleClick} />
      }
    
      <input
        type="button"
        id="delete"
/*         disabled={props.selectedId ? false : true}
 */ 
disabled = {!dataUI.selectedExpense}      
 value="Delete"
        onClick={handleClick}
      />
      <input
        type="button"
        id="edit" /* disabled={props.selectedExpense.id ?false:true} */
        value="Edit"
        disabled = {!dataUI.selectedExpense}
        onClick={handleClick}
      />
      <input type="button" id="update" disabled = {!dataUI.onEdit || !dataUI.selectedExpense} value="Update" onClick={handleClick} />
     
    </div>
  );
};

export default DataAction;
