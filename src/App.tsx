import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Error from "./components/common/Error";
import Home from "./components/common/Home";
import { theme } from "./index"
import { ThemeProvider } from "@mui/material/styles";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ThemeProvider theme={theme}><Home /></ThemeProvider>,
  },
  {
    path: "*",
    element: <Error errorCode={404} />,
  },
]);
