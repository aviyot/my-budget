import React, {useState, useEffect } from "react";
import deleteDocument from "../functions/firebase/deleteData";

function Data(props) {

  const [selectedData,setSelectedData] = useState(null);

  useEffect(() => {


      props.selectionData(selectedData);
    
 
   })

  const handleClick = (_selectedData) => {

 
    setSelectedData(preSelectedData=>{

      if(preSelectedData) {
     
         if(preSelectedData.id === _selectedData.id)
           return null;
          else
          return _selectedData;

      }

      return _selectedData;
    });
  


  }
  

 

  const Exp = props.expenses.map((exp, index) => {
    return (
      <tr
        key={exp.id}
        className={selectedData && (selectedData.id == exp.id) ? "selected" : ""}
        /*         onFocus = {setSelected(true)}
         */ onClick={() => {handleClick(exp)}}
        //  onBlur = {console.log("not selected")}
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
      <table >
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