import { extendTheme } from "@mui/joy/styles"; // Adjust based on your setup

const ninetiesTheme = extendTheme({
  fontFamily: {
    display: "Courier New, monospace", // A classic 90's-style monospaced font
    body: "Arial, sans-serif", // Widely used font in the 90s
  },
  radius: {
    xs: "0", 
    sm: "0", 
    md: "0", 
    lg: "0",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#f0f8ff", 
          100: "#b0e0e6",
          200: "#7ec8e3",
          300: "#4682b4",
          400: "#3b6aa0", 
          500: "#2f4f8f", 
        },
        
        background: {
          body: "#e6e6fa", 
          surface: "#f0f8ff", 
        },
        text: {
          primary: "#000000",
          secondary: "#3b6aa0", 
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: "#101b2e", 
          100: "#172844",
          200: "#1f355d",
          300: "#274577",
          400: "#2f4f8f",
          500: "#3b6aa0",
        },
        background: {
          body: "#101b2e", 
          surface: "#172844",
        },
        text: {
          primary: "#ffffff",
          secondary: "#7ec8e3", 
        },
      },
    },
  },
  components: {
        JoyChip: {
      styleOverrides: {
        root: {
          borderRadius: "0",
        },
      },
    },
    JoyButton: {
      styleOverrides: {
        root: {
          borderRadius: "0", 
          padding: "10px 20px",
          fontSize: "14px",
          fontWeight: "bold", 
          textTransform: "uppercase", 
          backgroundColor: "#4682b4",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#3b6aa0",
          },
          "&:focus": {
            outline: "2px solid #7ec8e3",
          },
        },
      },
    },
    JoyCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "0",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)", 
          padding: "20px",
          backgroundColor: theme.palette.background.surface,
          color: theme.palette.text.primary, 
        }),
      },
    },
    JoyInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "0",
          padding: "10px",
          fontSize: "14px",
          backgroundColor: theme.palette.background.surface,
          color: theme.palette.text.primary,
          "&:focus": {
            borderColor: "#7ec8e3", 
          },
        }),
      },
    },
  },
});

export default ninetiesTheme;

