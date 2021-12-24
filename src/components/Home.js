import React from "react";
import ExpenseInput from "./ExpenseInput";
import Data from "./Data";
import { useState, useEffect, useReducer } from "react";
import DataAction from "./DataAction";
import getData from "../functions/firebase/getData";
import CalcResult from "./CalcResult";

import dataAction from "../reducers/dataActionReducer";
import dataActionContext, {
  dataActionStatus,
} from "../contexts/dataActionContext";

export default function Home() {
  const [expenses, setExpenses] = useState([]);

  const [dataUI, dispatch] = useReducer(dataAction, dataActionStatus);

  useEffect(() => {
    getData("expenses", setExpenses);
  }, []);

  return (
    <dataActionContext.Provider value={{ dataUI, dispatch }}>
      <div>
        {dataUI.isFormOpen ? <ExpenseInput /> : <DataAction />}
        <CalcResult expenses={expenses} />
        <Data expenses={expenses} />
      </div>
    </dataActionContext.Provider>
  );
}
