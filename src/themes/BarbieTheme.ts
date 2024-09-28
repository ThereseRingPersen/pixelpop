import { extendTheme } from "@mui/joy/styles";

const barbieTheme = extendTheme({
  fontFamily: {
    display: "Pacifico, cursive",
    body: "Comic Sans MS, Noto Sans, sans-serif",
  },
  radius: {
    xs: "12px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
  },
  components: {
    JoyIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "16px", // Fully rounded for a playful, button-like feel
          padding: "8px",
          border: `2px solid ${
            theme.palette.mode === "dark" ? "#ff4da6" : "#ff69b4"
          }`, // Pink border in light mode, darker pink in dark mode
          backgroundColor:
            theme.palette.mode === "dark" ? "#800040" : "#ffb3d9", // Dark purple in dark mode, light pink in light mode
          color: theme.palette.text.primary, // Pink text color in dark mode, darker text in light mode
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "dark" ? "#b30059" : "#ff85c2", // Lighter shade on hover
            border: `2px solid ${
              theme.palette.mode === "dark" ? "#e60073" : "#ff85c2"
            }`, // Change the border on hover
          },
          "&:focus": {
            outline: "3px solid #ffb3d9", // Soft pink outline when focused in both modes
          },
        }),
      },
    },
    JoyButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "20px",
          padding: "8px 16px",
          textTransform: "none",
          border: `2px solid ${
            theme.palette.mode === "dark" ? "#e60073" : "#ff69b4"
          }`, // Dark pink border in dark mode
          backgroundColor:
            theme.palette.mode === "dark" ? "#e60073" : "#ff69b4", // Darker pink in dark mode
          color: "#fff", // Set text color to white for contrast
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "dark" ? "#ff1a8c" : "#ff85c2", // Lighter pink on hover
            border: `2px solid ${
              theme.palette.mode === "dark" ? "#ff1a8c" : "#ff85c2"
            }`, // Change the outline on hover
            color: "#800080", // Dark purple text color on hover
          },
          "&:focus": {
            outline: "3px solid #ffb3d9", // Soft pink outline when focused
          },
        }),
      },
    },
    JoyCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "24px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow in light mode
          backgroundColor:
            theme.palette.mode === "dark" ? "#2b0e45" : "#fff0f5", // Dark purple in dark mode, light pink in light mode
          color: theme.palette.text.primary, // Text color adapts to the mode
        }),
      },
    },
    JoyInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "16px",
          backgroundColor: theme.palette.background.surface, // Use surface background for inputs
          color: theme.palette.text.primary, // Use primary text color for inputs
          "&:focus": {
            borderColor: "#ff85c2", // Pink border on focus in dark mode
          },
        }),
      },
    },
     JoyTable: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& th": {
            backgroundColor:
              theme.palette.mode === "dark" ? "#3c1b5c" : "#f3e6ff", // Light purple in light mode, dark purple in dark mode
              color:  theme.palette.mode === "light" ? "#4d004d" : "#fff0f5", // Dark purple text for table headers
            padding: "12px",
          },
          "& tbody tr": {
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark" ? "#2b0e45" : "#ffe6f2", // Custom hover effect for both light and dark modes
            },
          },
        }),
      },
    },
    JoyBox: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#ffe6f2",
          100: "#ffb3d9",
          200: "#ff80bf",
          300: "#ff4da6",
          400: "#ff1a8c",
          500: "#e60073",
          600: "#b30059",
          700: "#800040",
          800: "#4d0026",
          900: "#1a000d",
        },
         success: {
          50: "#e0f7e6",  // Pastel green
          100: "#b3e6c8", // Softer pastel green
          200: "#80d6a6",
          300: "#4dc680",
          400: "#33b36b",
          500: "#1a994e",
        },
        danger: {
          50: "#ffe6e6",  // Pastel red
          100: "#ffb3b3", // Softer pastel red
          200: "#ff8080",
          300: "#ff4d4d",
          400: "#ff1a1a",
          500: "#e60000",
        },
        text: {
          primary: "#4d4d4d", // Dark grey text in light mode
        },
        background: {
          body: "#fff0f5", // Light pink background for body in light mode
          surface: "#fff0f5", // Surface background color for cards/inputs
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: "#4d0026",
          100: "#800040",
          200: "#b30059",
          300: "#e60073",
          400: "#ff1a8c",
          500: "#ff4da6",
          600: "#ff80bf",
          700: "#ffb3d9",
          800: "#ffe6f2",
          900: "#fff0f5",
        },
        text: {
          primary: "#ff85c2", // Pink hue for text in dark mode
        },
        background: {
          body: "#3c1b5c", // Dark purple background for body in dark mode
          surface: "#2b0e45", // Darker purple background for cards/inputs
        },
      },
    },
  },
});

export default barbieTheme;



