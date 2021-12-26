import React from "react";
import "@fontsource/roboto";
import { ThemeProvider, createTheme, CssBaseline } from "@material-ui/core";
import defaultTheme from "@material-ui/core/styles/defaultTheme";

const customTheme = {
  palette: {
    primary: {
      main: "#8cc32e",
    },
    // secondary: {
    //   main: "#1f3d53",
    // },
    background: {
      default: defaultTheme.palette.common.white,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        "&$containedPrimary": {
          minWidth: "100px",
          color: defaultTheme.palette.common.white,
        },
      },
    },
  },
  typography: {
    h1: {
      fontFamily: "cursive",
    },
  },
};

const theme = createTheme(customTheme);

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
