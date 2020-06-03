import React, { useContext, useEffect, useState } from "react";
import deleteDocument from "../functions/firebase/deleteData";
import ExpensesContext from "../contexts/contextStore";
import DataActionContext from "../contexts/dataActionContext";
import sortObj from "../functions/utilityFunctions/sortObj"

function Data(props) {

  const exps = useContext(ExpensesContext);
  const [sortKey, setSortKey] = useState("amount");
  const [sortOrder, setSortOrder] = useState(false);
  const [typeValue, setTypeValue] = useState("num");
  const { dataUI, dispatch } = useContext(DataActionContext);

  const handleClick = (_selectedData) => {
    dispatch({ type: "EXPENSE_SELECTED", selectedExpense: _selectedData });
  };

  const Exp = sortObj(props.expenses,sortKey,sortOrder,typeValue).map((exp, index) => {
    return (
      <tr
        key={exp.id}
        className={
          dataUI.expensesSelected && dataUI.selectedExpense.id === exp.id
            ? "selected"
            : ""
        }
        onClick={() => {
          handleClick(exp);
        }}
      >
        <td style={{padding:"2px 4px"}}>{index}</td>
        <td>{exp.data().name}</td>
        <td>{exp.data().amount}</td>
      </tr>
    );
  });


  return (
    <div className="App">
      <h1>{exps.name}</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th onClick={()=>{setTypeValue("str");setSortKey("name");setSortOrder(!sortOrder)}}>Name</th>
            <th  onClick={()=>{setTypeValue("num");setSortKey("amount");setSortOrder(!sortOrder)}}>Amount &#8362;</th>
          </tr>
        </thead>
        <tbody>{Exp}</tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
export default Data;
