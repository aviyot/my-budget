import { intialFormData } from "../contexts/dataActionContext";

const dataAction = (state, action) => {
  switch (action.type) {
    case "CLOSE_FORM":
      return {
        ...state,
        isFormOpen: false,
        selectedExpense: null,
        expenseSelected: false,
        currentExpense: { ...intialFormData }
      };
    case "OPEN_FORM":
      return { ...state, isFormOpen: true };
    case "EXPENSE_SELECTED":
      return {
        ...state,
        expenseSelected: true,
        selectedExpense: action.selectedExpense
      };
    case "ON_EDIT":
      return {
        ...state,
        onEdit: true,
        isFormOpen: true,
        currentExpense: { ...state.selectedExpense.data() }
      };
    case "NEW_EXPENSE_ADDED":
      return {};
    case "REST_SELECTED":
      return { ...state, selectedExpense: null, expenseSelected: false };
    case "CHANGE_FORM_HANDLER":
      return {
        ...state,
        currentExpense: {
          ...state.currentExpense,
          [action.e.target.id]: action.e.target.value
        }
      };
    default:
        return {...state}
  }
};

export default dataAction;
