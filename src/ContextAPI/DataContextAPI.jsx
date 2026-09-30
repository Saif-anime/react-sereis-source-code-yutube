import React, { createContext } from 'react'


// declare context api 

export const DataTransfer = createContext();

const DataContextAPI = ({ children }) => {
    const myAge = {Name:"saif", age:20};
    return (
        <DataTransfer.Provider value={myAge}>
            {children}
        </DataTransfer.Provider>
    )
}

export default DataContextAPI