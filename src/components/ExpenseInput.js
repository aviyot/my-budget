import React, { useState, useEffect,useContext } from "react";
import DataActionContext from "../contexts/dataActionContext"

const ExpenseInput = props => {
  const intialFormData = {
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

  const [expense, setExpense] = useState(intialFormData);
  const {dataUI,dispatch} = useContext(DataActionContext);



  useEffect(() => {
    props.setUserSelection(expense);

    /*    if(props.selectedExpense)
       setExpense(props.selectedExpense.data()); */
  }, [expense]);

  useEffect(
    () => {
      if (props.selectedExpense) {
        if (props.edit) setExpense(props.selectedExpense.data());
        else restForm();
      } else {
        restForm();
      }
    },
    [props.edit],
    [props.selectedExpense]
  );

  useEffect(() => {
    if (props.dataAdded) {
      restForm();
      props.setDataAdded(false);

      /*  setExpense(() => {
        props.setDataAdded(false);
        return {
          name: "",
          amount: ""
        };
      }); */
    }
  }, [props.dataAdded]);

  const handleChange = e => {
    setExpense({
      ...expense,
      [e.target.id]: e.target.value
    });
  };

  const restForm = () => {
    setExpense(intialFormData);
  };

  const closeForm = ()=>{
        dispatch({type:"CLOSE_FORM"})
  }

  return (
    <div>
      <button onClick={closeForm}>X</button>
      <form>
        <div>
          <div>
            <label>Expense Name</label>
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
        </div>
        <div>
        <label>Category</label> 
        <select value={expense.category} id="category" onChange={handleChange}>
            {expense.category_opthion.map((val,index)=>(<option value = {val} key={index}>{val}</option>))}
        </select>
          </div>

        <div>
          <label>Pay Method</label>
          <select id="methodPay"  value={expense.methodPay}
            onChange={handleChange}>
            {expense.method_pay_opthion.map((val,index)=>(<option value = {val} key={index}>{val}</option>))}
          </select>
        </div>

        <div>
          <label>Pay Freq</label>
          <input
            type="text"
            id="freqPay"
            value={expense.freqPay}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>beneficiary</label>
          <input
            type="text"
            id="benef"
            value={expense.benef}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Commitment Date</label>
          <input
            type="date"
            id="commitDate"
            value={expense.commitDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Frist Pay </label>
          <input
            type="date"
            id="fristPayDate"
            value={expense.fristPayDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Pay Mumber</label>
          <input
            type="number"
            id="numberOfPay"
            value={expense.numberOfPay}
            onChange={handleChange}
          />
        </div>
        <div></div>
      </form>
    </div>
  );
};

export default ExpenseInput;
