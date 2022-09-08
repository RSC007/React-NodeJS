import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";

import { AuthProvide } from "./Context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvide>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvide>
    </BrowserRouter>
  </React.StrictMode>
);
