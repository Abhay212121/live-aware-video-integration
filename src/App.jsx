import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/:category"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
