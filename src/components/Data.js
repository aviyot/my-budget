import React, { useContext,useState } from "react";
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
            ? "bg-danger text-white font-weight-bold"
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
    <div className="d-flex justify-content-center bg-light">
      <table className="w-100">
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
