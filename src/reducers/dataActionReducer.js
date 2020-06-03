import { intialFormData } from "../contexts/dataActionContext";
import deleteDocument from "../functions/firebase/deleteData";

const dataAction = (state, action) => {
  switch (action.type) {
    case "CLOSE_FORM":
      return {
        ...state,
        isFormOpen: false,
        onEdit: false,
        onUpdate:false,
        selectedExpense: null,
        expensesSelected: false,
        currentExpense: intialFormData
      };
    case "OPEN_FORM":
      return { ...state, isFormOpen: true };
    case "EXPENSE_SELECTED":
      return {
        ...state,
        expensesSelected: true,
        onEdit: true,
        selectedExpense: action.selectedExpense
      };
    case "ON_EDIT":
      //console.log(state.selectedExpense,state.selectedExpense.data();
      if(state.expensesSelected){
      return {
        ...state,
        onEdit: false,
        onUpdate:true,
        isFormOpen: true,
        currentExpense: { ...state.selectedExpense.data() }
      };
    } 
    else {
      console.log("select data");
      return {...state}
    } 
    case "DELETE_SELECTED":
      if(state.expensesSelected) {
        deleteDocument("expenses",state.selectedExpense.id);
      }
      else
      console.log("No Selected intem to delete")
    case "NEW_EXPENSE_ADDED":
      return {};
    case "REST_SELECTED":
      return { ...state, selectedExpense: null, expensesSelected: false };
    case "CHANGE_FORM_HANDLER":
      return {
        ...state,
        currentExpense: {
          ...state.currentExpense,
          [action.payload.id]: action.payload.value
        }
      };
    default:
        return {...state}
  }
};

export default dataAction;
