
const expensesReducer = (state , action) => {

    switch (action.type) {

        case "ADD_EXPENSE" :
            console.log("ADD_Expenses");
            return state + 1
        case "HANDLE_CHANGE":
            return {...state}
        default:
            return {...state}
    }
}

export default expensesReducer