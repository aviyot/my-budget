import { dataActionStatus } from "../contexts/dataActionContext"
/* 
const dataActionStatus = {
    isFormOpen : false,
    expenseSelected:false,
    onAdd:false,
    onDelete:false,
    onEdit:false,
    onUpdate:false,
    selectedExpense:null
} */

const dataAction = (state,action)=> {

switch(action.type){
    case "CLOSE_FORM":
        return {...state,isFormOpen:false}
 case "OPEN_FORM":
     return {...state,isFormOpen:true}
  case "EXPENSE_SELECTED":
  
          return {...state, expenseSelected:true,selectedExpense:action.selectedExpense}

/* case "EXPENSE_SELECTED":
   if(state.selectedExpense && state.expenseSelected.id === action.selectedExpense.data().id){
       console.log( state.expenseSelected.id,action.selectedExpense.data().id)
   console.log("op1");
        return {...state, expenseSelected:false,selectedExpense:null}
   }
   else{
    console.log("op2");
    return {...state, expenseSelected:true,selectedExpense:action.selectedExpense}

   } */

  
   case "ON_EDIT":
       console.log("ON_EDIT")
       return {...state, onEdit : true, isFormOpen:true}
}


}

export default dataAction;