import {createContext, useState} from 'react'

export const ThemeContex = createContext()

export const ThemeContexProvider = ({children}) => {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    return (
        <ThemeContex.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContex.Provider>
    )
}