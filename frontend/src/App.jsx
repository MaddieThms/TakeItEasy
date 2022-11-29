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
        <Route
          path="marco/:difficulty"
          element={<HeroRoute heroName="Marco" />}
        />
        <Route
          path="esther/:difficulty"
          element={<HeroRoute heroName="Esther" />}
        />
        <Route
          path="marco/:difficulty/endgame"
          element={<EndGame heroName="Marco" />}
        />
        <Route
          path="esther/:difficulty/endgame"
          element={<EndGame heroName="Esther" />}
        />
      </Routes>
    </div>
  );
}
export default App;
