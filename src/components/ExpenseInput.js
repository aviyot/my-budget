import React, { useContext, useState, useEffect } from "react";
import DataActionContext from "../contexts/dataActionContext";
import getData from "../functions/firebase/getData";
import DataAction from "./DataAction";


const ExpenseInput = props => {

  const { dataUI, dispatch } = useContext(DataActionContext);

  const [option, setOption] = useState([]);

  useEffect(() => {
    getData("form_option", setOption);
  }, []);


  const handleChange = e => {
    dispatch({ type: "CHANGE_FORM_HANDLER", payload: e.target });
  };

  const closeForm = () => {
    dispatch({ type: "CLOSE_FORM" });
  };

  return (
    <div style = {{position:"absolute",top:"30%",left:'10%',backgroundColor:"white",
    padding:"10px", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
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

          <select
            value={dataUI.currentExpense.category}
            id="category"
            onChange={handleChange}
          >
            {option.length
              ? option[0].data().category.map((val, index) => (
                  <option value={val} key={index}>
                    {val}
                  </option>
                ))
              : null}
          </select>
        </div>

        <div>
          <label>Pay Method</label>
          <select
            id="methodPay"
            value={dataUI.currentExpense.methodPay}
            onChange={handleChange}
          >
            {option.length
              ? option[0].data().pay_methods.map((val, index) => (
                  <option value={val} key={index}>
                    {val}
                  </option>
                ))
              : null}
            {/*  {method_pay_opthion.map((val, index) => (
              <option value={val} key={index}>
                {val}
              </option>
            ))} */}
          </select>
        </div>

        <div>
          <label>Pay Freq</label>
          <input
            type="text"
            id="freq_pay"
            value={dataUI.currentExpense.freq_pay}
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
      <DataAction/>
    </div>
  );
};

export default ExpenseInput;
