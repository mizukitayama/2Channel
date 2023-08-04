import "semantic-ui-css/semantic.min.css";
import "./index.js";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminPage } from "./pages/adminPage.jsx";
import { AuthCheck } from "./pages/authCheck.jsx";
import { Register } from "./pages/register.jsx";

export default function App() {
  const isOwner = localStorage.getItem("GMO2ch.is_owner");
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
                className="absolute inset-0"
              />
              {isOwner === "true" && (
                <Route path="/admin" element={<AdminPage />} />
              )}
              <Route
                path="/login"
                element={<Login />}
                className="absolute inset-0"
              />
              <Route
                path="/register"
                element={<Register />}
                className="absolute inset-0"
              />
            </Routes>
          </AuthCheck>
        </Router>
      </div>
    </div>
  );
}
