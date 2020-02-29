
const expensesReducer = (state , action) => {

    switch (action.type) {

        case "ADD_EXPENSE" :
            console.log("ADD_Expenses");
            return state + 1
    }
}

export default expensesReducer