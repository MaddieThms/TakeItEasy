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

  return (
    <div className="App">
      <Home />
      {places.map((place) => (
        <CityData place={place} />
      ))}

      <p>coucou</p>
    </div>
  );
}

export default App;
