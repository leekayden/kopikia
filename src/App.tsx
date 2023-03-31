// styles import
import "./App.css";
// react, router, hooks import
import { createBrowserRouter } from "react-router-dom";
// components import
import Error from "./components/common/Error";

export const router = createBrowserRouter([
  {
    path: "/test",
    element: <App />,
  },
  {
    path: "*",
    element: <Error errorCode={404} />,
  },
]);

function App() {
  return (
    <div>
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
