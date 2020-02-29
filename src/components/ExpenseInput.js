import React, {useContext } from "react";
import DataActionContext from "../contexts/dataActionContext"

const ExpenseInput = props => {
 
  const category_opthion= ["","car","study","clothing","food"];
  const method_pay_opthion = ["","אשראי","מזומן","הוראת קבע","העברה בנקאית"];

  const {dataUI,dispatch} = useContext(DataActionContext);

  const handleChange = e => {

    dispatch({type:"CHANGE_FORM_HANDLER",e})
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
              value={dataUI.currentExpense.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              id="amount"
              value={dataUI.currentExpense.amount}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
        <label>Category</label> 
        <select value={dataUI.currentExpense.category} id="category" onChange={handleChange}>
            {category_opthion.map((val,index)=>(<option value = {val} key={index}>{val}</option>))}
        </select>
          </div>

        <div>
          <label>Pay Method</label>
          <select id="methodPay"  value={dataUI.currentExpense.methodPay}
            onChange={handleChange}>
            {method_pay_opthion.map((val,index)=>(<option value = {val} key={index}>{val}</option>))}
          </select>
        </div>

        <div>
          <label>Pay Freq</label>
          <input
            type="text"
            id="freqPay"
            value={dataUI.currentExpense.freqPay}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>beneficiary</label>
          <input
            type="text"
            id="benef"
            value={dataUI.currentExpense.benef}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Commitment Date</label>
          <input
            type="date"
            id="commitDate"
            value={dataUI.currentExpense.commitDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Frist Pay </label>
          <input
            type="date"
            id="fristPayDate"
            value={dataUI.currentExpense.fristPayDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Pay Mumber</label>
          <input
            type="number"
            id="numberOfPay"
            value={dataUI.currentExpense.numberOfPay}
            onChange={handleChange}
          />
        </div>
        <div></div>
      </form>
    </div>
  );
};

export default ExpenseInput;
