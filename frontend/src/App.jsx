import React, { useEffect, useState } from "react";
import CityData from "./components/CityData";
import "./App.css";

function App() {
  const [marco, setMarco] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5001/marco`)
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
