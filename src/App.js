import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import TopCollections from "./pages/top-collections/index";
import HotCollections from "./pages/hot-collections/index";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/top-collections" element={<TopCollections />} />
      <Route path="/hot-collections" element={<HotCollections />} />
    </Routes>
  );
};

export default App;
