import React, { useEffect, useState } from "react";
import CityData from "./components/CityData";
import "./App.css";
import Home from "./pages/Home";

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

  // Hero profiles
  const heroes = [
    {
      id: 1,
      heroImage: "to replace",
      heroName: "Esther Stanhope",
      heroDescription:
        "Lady Esther (ou Hester) Stanhope, née en 1776, est une aristocrate britannique devenue aventurière au Proche-Orient. Elle fut proclamée « reine de Palmyre » par des tribus de bédouins, avant de devenir une sorte de « prophétesse » dans le pays druze, au Liban. La Revue des deux Mondes de 1845 la décrit comme « reine de Tadmor, sorcière, prophétesse, patriarche, chef arabe ».",
    },
    {
      id: 2,
      heroImage: "to replace",
      heroName: "Marco Polo",
      heroDescription:
        "Marco Polo, né le 15 septembre 1254, à Venise, est un marchand vénitien, célèbre pour son voyage en Chine. À l'âge de 17 ans, Marco Polo part avec son père, Niccolò, et son oncle Matteo pour l’Asie, où il se met, avec eux, au service de Kubilai Khan, l'empereur mongol. Après avoir exercé diverses missions officielles durant une vingtaine d'années, il entreprend son voyage de retour à l'occasion d'une mission diplomatique.",
    },
  ];

  return (
    <div className="App">
      {heroes.map((hero) => (
        <Home hero={hero} />
      ))}
      {marco.map((place) => (
        <CityData place={place} />
      ))}
    </div>
  );
}
export default App;
