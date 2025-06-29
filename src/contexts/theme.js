import { createContext, useContext } from "react";

const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})


export const ThemeProvider = ThemeContext.Provider

// Utilizing Context Theme using Custom Hook
export default function useTheme() {
    return useContext(ThemeContext)
} 

