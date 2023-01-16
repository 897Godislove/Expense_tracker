export function AppReducer (state, action) {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
        //         //destructuring the state
                ...state,
                transactions: state.transactions.filter(
                    transaction => transaction.id !== action.payload
                ),
            }
        
        case "ADD_TRANSACTION":
            return {
        //         //destructuring the state
                ...state,
                transactions: [
                    action.payload,
                    ...state.transactions
                ],
            }
        default:
           return state;
    }
}