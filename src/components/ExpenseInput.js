import React, { useContext, useState, useEffect } from "react";
import DataActionContext from "../contexts/dataActionContext";
import getData from "../functions/firebase/getData";
import DataAction from "./DataAction";

const ExpenseInput = (props) => {
  const { dataUI, dispatch } = useContext(DataActionContext);

  const [option, setOption] = useState([]);

  useEffect(() => {
    getData("form_option", setOption);
  }, []);

  const handleChange = (e) => {
    dispatch({ type: "CHANGE_FORM_HANDLER", payload: e.target });
  };

  const closeForm = () => {
    dispatch({ type: "CLOSE_FORM" });
  };

  return (
    <div id="expense-edit" className="card p-2">
      <div>
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={closeForm}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <form
          className="d-flex flex-wrap justify-content-between"
          style={{ gap: "1rem" }}
        >
          <div className="form-group">
            <label>Expense</label>
            <input
              className="form-control"
              type="text"
              id="name"
              value={dataUI.currentExpense.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input
              className="form-control"
              type="number"
              id="amount"
              value={dataUI.currentExpense.amount}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Category</label>

            <select
              className="form-control"
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

          <div className="form-group">
            <label>Pay Method</label>
            <select
              className="form-control"
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

          <div className="form-group">
            <label>Pay Freq</label>
            <input
              className="form-control"
              type="text"
              id="freq_pay"
              value={dataUI.currentExpense.freq_pay}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>beneficiary</label>
            <input
              className="form-control"
              type="text"
              id="benef"
              value={dataUI.currentExpense.benef}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Commitment Date</label>
            <input
              className="form-control"
              type="date"
              id="commitDate"
              value={dataUI.currentExpense.commitDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Frist Pay </label>
            <input
              className="form-control"
              type="date"
              id="fristPayDate"
              value={dataUI.currentExpense.fristPayDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Pay Mumber</label>
            <input
              className="form-control"
              type="number"
              id="numberOfPay"
              value={dataUI.currentExpense.numberOfPay}
              onChange={handleChange}
            />
          </div>
        </form>
        <DataAction />
      </div>
    </div>
  );
};

export default ExpenseInput;
