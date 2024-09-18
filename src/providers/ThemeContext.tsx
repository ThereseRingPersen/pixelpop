import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from '@mui/joy/styles';
import { mainTheme, barbieTheme, ninetiesTheme } from '../themes'; // Import the themes

// Create a context for theme management
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProviderWrapper = ({ children }) => {
  const [theme, setTheme] = useState(mainTheme); // Start with the default theme

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
