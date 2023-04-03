import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Error from "./components/common/Error";
import Home from "./components/common/Home";
import theme from "./index"

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
