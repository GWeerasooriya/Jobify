import React, { useState, useReducer, useContext } from "react"; 

const initialState = {
    isLoading: false,
    isModalOpen: false,
    alertText: '',
    alertType: '',
    };

    const AppContext = React.createContext()

    const AppProvider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
    }