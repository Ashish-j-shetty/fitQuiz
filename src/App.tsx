import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";

import "./styles/App.css";

function App() {
  return (
    <div className="min-h-screen flex justify-center item-center bg-green-900 color text-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
