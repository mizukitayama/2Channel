import "semantic-ui-css/semantic.min.css";
import "./index.js";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <div className="relative">
        <Router>
          <div>
            <Routes>
              <Route
                exact
                path="/"
                element={<Home />}
                className="absolute inset-0"
              />
              <Route
                path="/login"
                element={<Login />}
                className="absolute inset-0"
              />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}
