import React, { createContext, useState } from 'react'

export const Theme = createContext(); // create ek context


const ThemeProvider = ({ children }) => {
    const [color, setColor] = useState('dark');

    const handleStatechange = () =>{
        color === "dark" ? setColor('light'): setColor('dark')
    }


    return (
        <>
            <Theme.Provider value={{color, handleStatechange}} >
                {children}
            </Theme.Provider>

        </>
    )
}

export default ThemeProvider;