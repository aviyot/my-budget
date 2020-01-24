import React, { useEffect, useState } from "react";
import deleteDocument from "../functions/firebase/deleteData";

function Data(props) {
  const [selected, setSelected] = useState(false);

  const selectionData = selectedExpense => {
    if (selectedExpense) {
      props.selectionData(selectedExpense);
    }
  };

  const Exp = props.expenses.map((exp, index) => {
    return (
      <tr
        key={exp.id}
        className={selected ? "selected" : ""}
        /*         onFocus = {setSelected(true)}
         */ onClick={() => {
          setSelected(selected => !selected);
          selected ? selectionData(null) : selectionData(exp);
        }}
      >
        <td>{index}</td>
        <td>{exp.data().name}</td>
        <td>{exp.data().amount}</td>

        <td>
          {props.selectedId === exp.id ? (
            <h4
              onClick={() => {
                deleteDocument("expenses", exp.id);
              }}
            >
              x
            </h4>
          ) : null}
        </td>
      </tr>
    );
  });

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Exp.Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{Exp}</tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
export default Data;
