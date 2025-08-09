import { extendTheme } from "@mui/joy";

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          "100": "#E51927",
          "200": "#F5424A",
          "300": "#B31218",
          "400": "#8b8e96",
          "500": "#8e9199",
          "600": "#808080",
          solidBg: "#E51927",
          solidHoverBg: "#F5424A",
          solidActiveBg: "#B31218",
        },
        background: {
          body: "#f5f5f5 ",
          surface: "#ffffff",
        },
        text: {
          primary: "#121212",
          secondary: "#E51927",
        },
      },
    },
  },

  typography: {
    h1: {
      fontFamily: '"Bebas Neue", sans-serif',
      fontSize: "clamp(1.5rem, 10vmin, 5rem)",
      fontWeight: 400,
    },
    h2: {
      fontFamily: '"Bebas Neue", sans-serif',
      fontSize: "clamp(1.2rem, 5vmin, 2.5rem)",
      fontWeight: 100,
    },
    "body-lg": {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: "clamp(1rem, 2.5vmin, 1.5rem)",
      fontWeight: 600,
    },
    "body-md": {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: "clamp(0.9rem, 2vmin, 1.125rem)",
      fontWeight: 600,
    },
    "body-sm": {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: "clamp(0.875rem, 1.6vmin, 1rem)",
    },
  },
  fontSize: {
    md: "clamp(1rem, 2vmin, 1.125rem)",
  },
  components: {
    JoyCard: {
      styleOverrides: {
        root: {
          width: "90%",
          height: "70svh",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        },
      },
    },
    JoyCardContent: {
      styleOverrides: {
        root: {
          flex: 1,
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        },
      },
    },
  },
});
