import React, { useEffect, useState } from "react";
import CityData from "./components/CityData";
import Home from "./pages/Home";

import "./App.css";

function App() {
  const [marco, setMarco] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/marco`)
      .then((response) => response.json())
      .then((data) => {
        setMarco(data);
        console.warn(marco);
      });
  }, []);

  return (
    <div className="App">
      {marco.map((place) => (
        <CityData place={place} />
      ))}
    </div>
  );
}

export default App;
