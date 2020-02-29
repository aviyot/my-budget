
import { createContext } from 'react';

export const expenses = {
   name:"fodd",
   amount:100
  };

  const ExpensesContext =  createContext(expenses);
  export default ExpensesContext;