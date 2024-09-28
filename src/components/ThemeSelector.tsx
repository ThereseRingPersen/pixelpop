import React from "react";
import { Select, Option } from "@mui/joy";
import { ThemeName } from "../providers/types";
import { useThemeContext } from "../providers/ThemeContext"; // Import the custom hook to access the theme context

const ThemeToggleDropdown: React.FC = () => {
  // Access current theme and changeTheme function from context
  const { theme, changeTheme } = useThemeContext();

  // Handle theme selection change
  const handleChange = (
    _event: React.SyntheticEvent | null,
    newValue: string | null,
  ) => {
    if (newValue) {
      const selectedTheme = newValue as ThemeName; // Cast the selected value to ThemeName
      changeTheme(selectedTheme); // Call the changeTheme function from context
    }
  };

  // List of themes with display names and corresponding ThemeName values
  const themeOptions = [
    { name: "Main Theme", value: "DEFAULT" },
    { name: "Barbie Theme", value: "BARBIE" },
    { name: "90's Theme", value: "NINETIES" },
  ];

  return (
    <Select
      value={theme ? theme : null} // Use current theme from context
      onChange={handleChange}
      placeholder="Select a Theme"
      sx={{ minWidth: 200 }}
    >
      {themeOptions.map((theme) => (
        <Option key={theme.value} value={theme.value}>
          {theme.name}
        </Option>
      ))}
    </Select>
  );
};

export default ThemeToggleDropdown;
