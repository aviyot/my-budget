import {createContext} from "react"

export const dataActionStatus = {
    isFormOpen : false,
    expenseSelected:false,
    onAdd:false,
    onDelete:false,
    onEdit:false,
    onUpdate:false,
    selectedExpense:null
}
const DataActionContext = createContext(dataActionStatus);
export default DataActionContext;