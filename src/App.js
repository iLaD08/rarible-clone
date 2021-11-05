import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import TopCollections from "./pages/top-collections/index";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/top-collections" element={<TopCollections />} />
    </Routes>
  );
};

export default App;
