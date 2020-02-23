import React, { useState } from "react";
import { addToFirestore } from "../functions/firebase/addData";
import deleteDocument from "../functions/firebase/deleteData";
import updateData from "../functions/firebase/updateData";


const DataAction = props => {

const [isFormOpen,setIsFormOpen] = useState(false);

  const handleClick = e => {
    const action = e.target.id;

    switch (action) {
      case "add":
        addToFirestore("expenses", props.expense);
        props.setDataAdded(true);
        break;
      case "edit":
        props.onEdit();
        
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
       {isFormOpen ? (<>< input type="button" id = "close_form"  value = "Close Form" 
                             onClick ={()=>{
                              props.closeOpenForm(false);
                               setIsFormOpen(false);
                            }}/>
               <input type="button" id="add" value="Add" onClick={handleClick} /></>):
       <input type ="button" id ="open_form"  value = "Open Form"  
       onClick ={()=>{
        props.closeOpenForm(true); 
        setIsFormOpen(true) }}/> }
     
      <input
        type="button"
        id="delete"
/*         disabled={props.selectedId ? false : true}
 */ 
disabled = {!props.selectedExpense}      
 value="Delete"
        onClick={handleClick}
      />
      <input
        type="button"
        id="edit" /* disabled={props.selectedExpense.id ?false:true} */
        value="Edit"
        disabled = {!props.selectedExpense}
        onClick={handleClick}
      />
      <input type="button" id="update" disabled = {!props.edit || !props.selectedExpense} value="Update" onClick={handleClick} />
     
    </div>
  );
};

export default DataAction;
