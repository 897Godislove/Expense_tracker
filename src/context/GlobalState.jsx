import React, { createContext, useReducer} from "react";
import {AppReducer} from "./AppReducer";


//Initial State
const InitialState = {  transactions: [] };

//Create Context
export const Globalcontext = createContext(InitialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(InitialState, AppReducer)

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    return <Globalcontext.Provider 
                value={{
                    transactions: state.transactions, 
                    deleteTransaction,
                    addTransaction, 
                }}
                >
            {children}</Globalcontext.Provider>;
};