import React from "react";
import ExpenseInput from "./ExpenseInput";
import Data from "./Data";
import { useState, useEffect } from "react";
import DataAction from "./DataAction";
import getData from "../functions/firebase/getData";

export default function Home() {
  const [expenses, setExpenses] = useState([]);
  const [edit, setEdit] = useState(false);
  const [expense, setExpense] = useState(null);
  const [selectedExpense, setSelectedExpense] = useState(null);

  useEffect(() => {
    getData("expenses", setExpenses);
  }, []);

 
  const setUserSelection = expense => {
    setExpense(expense);
  };

  const onEdit = () => {
    setEdit(true);

  };


  const selectionData = expense => {
    setSelectedExpense(expense);
  };

  return (
    <div>
      <ExpenseInput
        edit={edit}
        onEdit={onEdit}
        setUserSelection={setUserSelection}
        selectedExpense={selectedExpense}
      />
      <DataAction
        onEdit={onEdit}
        expense={expense}
        selectedExpense={selectedExpense}
        setUserSelection={setUserSelection}
      />
      <Data selectionData={selectionData} expenses={expenses} />
    </div>
  );
}
