import { createContext, useState } from "react";


export const ColorSchemeContext = createContext({
  isDark: false,
  toggleColorScheme: () => {},
});

export const ColorSchemeProvider =({children}) => {
  const [isDark, setIsDark] = useState(false);

  const toggleColorScheme = () => {
    setIsDark(!isDark);
  }

  const value = {
    isDark,
    setIsDark,
    toggleColorScheme 
  }

  return (
    <ColorSchemeContext.Provider value={value}>{children}</ColorSchemeContext.Provider>
  )
}










