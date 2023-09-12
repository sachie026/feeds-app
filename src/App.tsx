import React from "react";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Feeds from "./pages/feeds";

function App() {
  return (
    <div className="w-full h-full dark:bg-dark-black">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="feeds" element={<Feeds />} />
      </Routes>
    </div>
  );
}

export default App;
