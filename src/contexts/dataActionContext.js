import {createContext} from "react"

export const intialFormData = {
    name: "",
    amount: "",
    category: "",
    methodPay: "",
    freq_pay: 1,
    benef: "",
    commitDate: "",
    fristPayDate: "", 
    numberOfPay: ""
  }

export const dataActionStatus = {
    isFormOpen : false,
    expensesSelected:false,
    onAdd:false,
    onDelete:false,
    onEdit:false,
    onUpdate:false,
    selectedExpense:intialFormData,
    currentExpense :intialFormData
}
const DataActionContext = createContext(dataActionStatus);
export default DataActionContext;