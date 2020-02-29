import {createContext} from "react"
export const intialExpense = {
    name: "",
    amount: "",
    category: "",
    category_opthion:["","car","study","clothing","food"],
    methodPay: "",
    method_pay_opthion :["","אשראי","מזומן","הוראת קבע","העברה בנקאית"],
    freqPay: 1,
    benef: "",
    commitDate: "",
    fristPayDate: "", 
    numberOfPay: ""
  };

const ExpensesContext = createContext(null);