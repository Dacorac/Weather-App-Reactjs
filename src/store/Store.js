import React, { useReducer, createContext } from 'react';

import HistoryReducer from "../reducers/HistoryReducer";


const initialState = {searchedCities : []};

const Store = ({children}) => {

    const [state, dispatch] = useReducer(HistoryReducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
} 

export const Context = createContext(initialState);
export default Store;