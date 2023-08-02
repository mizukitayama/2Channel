import "semantic-ui-css/semantic.min.css";
import "./index.js";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <hr />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}