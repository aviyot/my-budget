import React from "react";
import ExpenseInput from "./ExpenseInput";
import Data from "./Data";
import { useState, useEffect } from "react";
import DataAction from "./DataAction";
import getData from "../functions/firebase/getData";
import CalcResult from "./CalcResult";

export default function Home() {
  const [expenses, setExpenses] = useState([]);
  const [edit, setEdit] = useState(false);
  const [expense, setExpense] = useState(null);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [dataSelected,setDataSelected] = useState(false);
  const [dataAdded,setDataAdded] = useState(false);

  useEffect(() => {
    getData("expenses", setExpenses);
  }, []);


 
  const setUserSelection = expense => {
    setExpense(expense);
  };

  const onEdit = () => {
    setEdit(true);

  };

  const restDataInput = (setExpenses)=>{
    
    setExpenses({
      name: "",
      amount: ""
    })

  }


  const selectionData = (expense,selected) => {
    setSelectedExpense(expense);
    setDataSelected(selected);

  };

  return (
    <div>
      <ExpenseInput
        edit={edit}
        onEdit={onEdit}
        setUserSelection={setUserSelection}
        selectedExpense={selectedExpense}
        dataSelected = {dataSelected}
        dataAdded = {dataAdded}
        setDataAdded = {setDataAdded}
      />
      <DataAction
        onEdit={onEdit}
        expense={expense}
        selectedExpense={selectedExpense}
        setUserSelection={setUserSelection}
        dataSelected = {dataSelected}
        setDataAdded = {setDataAdded}
      />
      <Data selectionData={selectionData} expenses={expenses}/>
      <CalcResult expenses = {expenses}/>
    </div>
  );
}
