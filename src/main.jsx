import React from "react";
import ReactDOM from "react-dom/client";
import "/src/styles/globalStyles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImmortalTracker from "./pages/ImmortalTracker";
import Dictionary from "./pages/Dictionary";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Experience from "./pages/Experience";
import Root from "./pages/Root";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Root />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="immortal-tracker"
            element={<ImmortalTracker />}
          />
          <Route
            path="dictionary"
            element={<Dictionary />}
          />
          <Route
            path="experience"
            element={<Experience />}
          />
          <Route
            path="*"
            element={<ErrorPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
