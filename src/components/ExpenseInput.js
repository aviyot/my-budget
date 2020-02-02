import React, { useState, useEffect } from "react";
import firebase from "../config/fbConfig";

const ExpenseInput = props => {

  const [expense, setExpense] = useState({
    name: "",
    amount: ""
  });

  useEffect(() => {
    props.setUserSelection(expense);
   
  });

  useEffect(() => {
 
    if(props.selectedExpense)
      setExpense(props.selectedExpense.data());
  
  }, [props.edit]);

  useEffect(() => {
    if (props.dataAdded) {
      setExpense(() => {
        props.setDataAdded(false);
        return {
          name: "",
          amount: ""
        };
      });
    }
  }, [props.dataAdded]);

  const handleChange = e => {
    console.log("****handleChange******");
    setExpense({
      ...expense,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div>
      <form>
        <div>
          <label>Exp.Name</label>
          <input
            type="text"
            id="name"
            value={expense.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            id="amount"
            value={expense.amount}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default ExpenseInput;
