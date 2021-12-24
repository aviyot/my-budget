import React from "react";

const CalcResult = (props) => {
  let sum = 0;
  if (props.expenses.length > 0) {
    props.expenses.forEach((element) => {
      sum += +element.data().amount;
    });
  }
  return (
    <div className="card text-center">
      {" "}
      <h1>{sum.toFixed()} &#8362; </h1>{" "}
    </div>
  );
};

export default CalcResult;
