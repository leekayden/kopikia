import React from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Error from "./components/common/Error";
import Home from "./components/common/Home";
import Order from "./components/common/Order";
import TermsOfUse from "./components/pages/Terms";
import TestServer from "./components/TestServer";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import { AppContext, GlobalState } from "./AppContext";

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
    path: "/terms",
    element: <TermsOfUse />,
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
            light: "#69696a",
            main: "#28282a",
            dark: "#1e1e1f",
          },
          secondary: {
            light: "#fff5f8",
            main: "#ff3366",
            dark: "#e62958",
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                fontFamily: "'Indie Flower', cursive",
                fontSize: "1.2rem",
                fontWeight: "bold",
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

  const [globalState, setGlobalState] = React.useState<GlobalState>({
    darkMode: prefersDarkMode,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContext.Provider value={{ globalState, setGlobalState }}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
