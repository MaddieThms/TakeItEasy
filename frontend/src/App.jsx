import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import HeroRoute from "./pages/HeroRoute";
import EndGame from "./pages/EndGame";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="marco" element={<HeroRoute heroName="marco" />} />
        <Route path="esther" element={<HeroRoute heroName="esther" />} />
        <Route path="endgame" element={<EndGame />} />
      </Routes>
    </div>
  );
}
export default App;
