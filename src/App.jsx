import "./index.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <div className="page-wrapper">
            <div className="main-page">
              <Home />
            </div>
          </div>
        }
      />

      <Route
        path="/result"
        element={<Result />}
      />

    </Routes>
  );
}

export default App;