import React from "react";
import CityData from "./components/CityData";
import Home from "./pages/Home";

import "./App.css";

function App() {
  const places = [
    {
      id: 1,
      ville: "Paris",
      histoire:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt velit molestiae libero quia in, sunt, nobis rerum quas saepe dolores enim dolore ad! Animi accusamus consequuntur distinctio necessitatibus vel.",
      citation:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, inventore.",
      site: "github.com",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Canaletto_Entrance_to_the_Grand_Canal_Venice.jpg",
      lvl: 1,
    },
    {
      id: 2,
      ville: "Lyon",
      histoire:
        "Lyon Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt velit molestiae libero quia in, sunt, nobis rerum quas saepe dolores enim dolore ad! Animi accusamus consequuntur distinctio necessitatibus vel.",
      citation:
        "Lyon Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, inventore.",
      site: "google.com",
      img: "http://www.rhone-alpes-info.com/files/2015/04/lyon.jpg",
      lvl: 2,
    },
  ];

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
      <Home />
      {places.map((place) => (
        <CityData place={place} />
      ))}
      <Home heroes={heroes} />
      <p>coucou</p>
    </div>
  );
}

export default App;
