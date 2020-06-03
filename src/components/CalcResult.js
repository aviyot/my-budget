import React from "react";

const CalcResult = props => {
  const style = {
    fontSize: "xx-large",
    display: "inline-block",
    padding: "5px 80px",
    boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginTop:"10px"
  };

  let sum = 0;
  if (props.expenses.length > 0) {
    props.expenses.forEach(element => {
      sum += +element.data().amount;
    });
  }
  return <div style={style}> {sum.toFixed()} &#8362; </div>;
};

export default CalcResult;
