import "semantic-ui-css/semantic.min.css";
import "./index.js";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { CoverImage } from "./pages/coverImage.jsx";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthCheck } from "./pages/authCheck.jsx";

export default function App() {
  return (
    <div className="App">
      <div className="relative">
        <Router>
          <AuthCheck>
            <Routes>
              <Route
                exact
                path="/"
                element={<Home />}
                classname="absolute inset-0"
              />
              <Route path="/login" element={<Login />} />
            </Routes>
          </AuthCheck>
        </Router>
        {/* <CoverImage /> */}
      </div>
    </div>
  );
}
