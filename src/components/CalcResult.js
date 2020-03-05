import React from "react";

const CalcResult = props => {
  const style = {
    backgroundColor: "yellow",
    fontSize: "x-large",
    display: "inline-block",
    padding: "10px",
    marginLeft: "100px"
  };

  let sum = 0;
  let i=0;
  if (props.expenses.length > 0) {
    props.expenses.forEach(element => {
      sum += +element.data().amount;
    });
  }
  return <div style={style}> {sum} </div>;
};

export default CalcResult;
