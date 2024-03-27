import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Pages from "./Pages.jsx";
import App from "./App.jsx";


import Login from "./Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
