import React, {useState, useEffect } from "react";
import deleteDocument from "../functions/firebase/deleteData";

function Data(props) {

  const [selected, setSelected] = useState(false);
  const [selectedData,setSelectedData] = useState(null);

  useEffect(() => {

    if (selectedData) {
      props.selectionData(selectedData,selected);
    }
 
   })

  const handleClick = (_selectedData) => {

    setSelectedData(_selectedData);

    setSelected(preSelected => {
      if(selectedData){
           if(_selectedData.id === selectedData.id){
            //selectionData(null);
           return !preSelected  
           }
            else {
            return preSelected
            }
      }
      else {
        return true;
 
      }
    });

  }
  

 

  const Exp = props.expenses.map((exp, index) => {
    return (
      <tr
        key={exp.id}
        className={selected && (selectedData.id == exp.id) ? "selected" : ""}
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
