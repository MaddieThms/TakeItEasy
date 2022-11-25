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
        <Route path="marco" element={<HeroRoute heroName="Marco" />} />
        <Route path="esther" element={<HeroRoute heroName="Esther" />} />
        <Route path="marco/endgame" element={<EndGame heroName="Marco" />} />
        <Route path="esther/endgame" element={<EndGame heroName="Esther" />} />
      </Routes>
    </div>
  );
}
export default App;
