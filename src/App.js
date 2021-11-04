import React from "react";
import { Routes, Route } from "react-router-dom";
import TopCollections from "./pages/top-collections";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Docs</h1>} />
      <Route path="/top-collections" element={<TopCollections />} />
    </Routes>
  );
};

export default App;
