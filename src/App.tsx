import React from "react";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Feeds from "./pages/feeds";

function App() {
  return (
    <div className="w-full min-h-full h-fit dark:bg-dark-black flex justify-center">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="feeds" element={<Feeds />} />
      </Routes>
    </div>
  );
}

export default App;
