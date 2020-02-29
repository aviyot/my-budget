import React from "react";
import ExpenseInput from "./ExpenseInput";
import Data from "./Data";
import { useState, useEffect,useReducer,useContext } from "react";
import DataAction from "./DataAction";
import getData from "../functions/firebase/getData";
import CalcResult from "./CalcResult";

import dataAction from "../reducers/dataActionReducer";
import dataActionContext, {dataActionStatus} from  "../contexts/dataActionContext"



export default function Home() {
  const [expenses, setExpenses] = useState([]);
  const [edit, setEdit] = useState(false);
  const [expense, setExpense] = useState(null);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  // const [dataSelected,setDataSelected] = useState(false);
  const [dataAdded,setDataAdded] = useState(false);


  const [dataUI , dispatch] = useReducer(dataAction,dataActionStatus);

  useEffect(() => {
     getData("expenses",setExpenses)
  }, []);


  const setUserSelection = expense => {
    setExpense(expense);
    
  };

 

  const onEdit = () => {
   
    setEdit(!edit);
  
  };

  const restDataInput = ()=>{
    setExpenses({
      name: "",
      amount: ""
    })

  }


  const selectionData = (expense) => {
    setSelectedExpense(expense);

  };

  const closeOpenForm = (formStatus)=>{
    console.log(formStatus);
        setIsFormOpen(formStatus);
  }

  return (
    <dataActionContext.Provider  value = {{dataUI,dispatch}}>
    <div>
    
      {dataUI.isFormOpen ?
      <ExpenseInput
        edit={edit}
        setUserSelection={setUserSelection}
        selectedExpense={selectedExpense}
        dataAdded = {dataAdded}
        setDataAdded = {setDataAdded}
        restDataInput ={restDataInput}
      
      /> : null
}
      <DataAction
        onEdit={onEdit}
        edit={edit}
        expense={expense}
        selectedExpense={selectedExpense}
        setUserSelection={setUserSelection}
        setDataAdded = {setDataAdded}
        closeOpenForm ={closeOpenForm }
      />
      <CalcResult expenses = {expenses}/>
      <Data selectionData={selectionData} expenses={expenses}/>
    </div>
    </dataActionContext.Provider>
  );
 }
