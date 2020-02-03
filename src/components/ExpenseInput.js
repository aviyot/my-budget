import React, { useState, useEffect } from "react";

const ExpenseInput = props => {

  const [expense, setExpense] = useState({
    name: "",
    amount: ""
  });

  useEffect(() => {
    props.setUserSelection(expense);
    
 /*    if(props.selectedExpense)
    setExpense(props.selectedExpense.data()); */
  });

   useEffect(() => {

    if(props.selectedExpense) {
      if(props.edit)
      setExpense(props.selectedExpense.data());
      else
      setExpense({
        name: "",
        amount: ""
      });
    }

    else {
      setExpense({
        name: "",
        amount: ""
      });
    }
    
  
  }, [props.edit],[props.selectedExpense]); 

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
