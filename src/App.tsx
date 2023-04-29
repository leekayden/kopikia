import React from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Error from "./components/common/Error";
import Home from "./components/common/Home";
import Order from "./components/common/Order";
import TestServer from "./components/TestServer";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/test",
    element: <TestServer />,
  },
  {
    path: "*",
    element: <Error errorCode={404} />,
  },
]);

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#795548",
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                fontFamily: "'Indie Flower', cursive",
              },
            },
          },
        },
        typography: {
          fontFamily: "'Merienda', cursive",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
