import React, { useState, useEffect } from "react";
import firebase from "../config/fbConfig";

const ExpenseInput = props => {
  const [edit, setEdit] = useState(true);
  const user = firebase.auth().currentUser;

  const [expense, setExpense] = useState({
    name: "",
    amount: "",
    userId: user.uid
  });


  useEffect(() => {
   props.setUserSelection(expense);

   if(props.edit && edit) {
    setExpense(props.selectedExpense.data());
     setEdit(false);
   }

  })

  const handleChange = e => {
    console.log("****handleChange******")
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
