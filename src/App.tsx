import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Error from "./components/common/Error";
import Home from "./components/common/Home";
import Order from "./components/common/Order";
import TestServer from "./components/TestServer";

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
