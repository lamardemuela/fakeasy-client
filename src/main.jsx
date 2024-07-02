import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#A4FCC4",
      contrastText: "#020288",
    },
    secondary: {
      main: "#E5ECE8",
      contrastText: "#020288"
    },
    divider: "#020288",
    background: {
      default: "#061733",
      paper: "#01013A",
    },
    text: {
      primary: "#fff",
      secondary: "#E5ECE8",
    },
  },
  typography: {
    fontFamily: "Raleway",
    fonWeight: 500,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
