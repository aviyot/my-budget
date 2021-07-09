import React, { useContext } from "react";
import { addToFirestore } from "../functions/firebase/addData";
import updateData from "../functions/firebase/updateData";
import DataActionContext from "../contexts/dataActionContext";

const DataAction = props => {
  const { dispatch, dataUI } = useContext(DataActionContext);

  const handleClick = e => {
    const action = e.target.id;

    switch (action) {
      case "add":
        addToFirestore("expenses", dataUI.currentExpense);
        dispatch({ type: "CLOSE_FORM" });

        break;
      case "edit":
        dispatch({ type: "ON_EDIT"});
        break;
      case "delete":
        dispatch({type:"DELETE_SELECTED"})
        //deleteDocument("expenses", dataUI.selectedExpense.id);
        break;
      case "update":
        updateData(
          "expenses",
          dataUI.selectedExpense.id,
          dataUI.currentExpense
        );
        dispatch({ type: "REST_SELECTED" });
        dispatch({ type: "CLOSE_FORM" });
        break;
      case "add_new":
        dispatch({ type: "OPEN_FORM" });
        dispatch({ type: "REST_SELECTED" });
      break;
      default:
    }
  };

  return (
    <div className="form-action d-flex justify-content-start my-2">
      {dataUI.isFormOpen ? (
        <input type="button" className="btn btn-outline-secondary" id="add" value="Add" onClick={handleClick} />
      ) : (
        <input
        className="btn btn-outline-secondary"
          type="button"
          id="add_new"
          value="Add"
          onClick={handleClick}
        />
      )}

      <input
        className="btn btn-outline-secondary"
        type="button"
        id="delete"
        disabled={!dataUI.expensesSelected}
        value="Delete"
        onClick={handleClick}
      />
      <input
        className="btn btn-outline-secondary"
        type="button"
        id="edit" /* disabled={props.selectedExpense.id ?false:true} */
        value="Edit"
        disabled={!dataUI.onEdit }
        onClick={handleClick}
      />
      <input
      className="btn btn-outline-secondary"
        type="button"
        id="update"
        disabled={dataUI.onEdit || !dataUI.onUpdate}
        value="Update"
        onClick={handleClick}
      />
    </div>
  );
};

export default DataAction;
