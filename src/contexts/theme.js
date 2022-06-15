import React, { useState, createContext } from "react";

export const ThemeContext = createContext({})

function ThemeProvider({children}) {
  const [theme, setTheme] = useState({theme: "dark"})

  return (
    <ThemeContext.Provider value={user} >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider