import React, { createContext, useContext, useState } from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import {ThemeName, themes } from "./types";

// Define the structure of the ThemeContext
interface ThemeContextProps {
  theme: ThemeName;

  changeTheme: (newTheme: ThemeName) => void;
}

// Create a context with a default value
const ThemeContext = createContext<ThemeContextProps>({
  theme: "DEFAULT",
  changeTheme: () => {},
});

// Custom hook to use the theme context
export const useThemeContext = () => useContext(ThemeContext);

// ThemeProviderWrapper component that wraps the app with theme and color scheme functionality
export const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeName>("DEFAULT");

  // Function to change the theme
  const changeTheme = (newTheme: ThemeName) => {
    setTheme(newTheme);
  };


  return (
    <CssVarsProvider theme={themes[theme]}>
      <ThemeContext.Provider value={{ theme,changeTheme }}>
        {children}
      </ThemeContext.Provider>
    </CssVarsProvider>
  );
};
