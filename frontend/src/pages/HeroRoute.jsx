import React, { useState, useEffect } from "react";
import Levels from "../components/Levels";
import Puzzle from "../components/Puzzle";
import CityData from "../components/CityData";
// eslint-disable-next-line react/prop-types
function HeroRoute({ heroName }) {
  const [hero, setHero] = useState([]);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5001/${heroName}`)
      .then((response) => response.json())
      .then((data) => {
        setHero(data);
      });
  }, []);

  const nextLevel = () => {
    setLevel(level + 1);
  };

  return (
    <div>
      {hero.length && (
        <>
          <h1>Sur les pas de Marco</h1>
          <h3>Level {level+1}</h3>
          <Levels level={level} />
          <Puzzle img={hero[level].image} />
          <CityData city={hero[level]} />
          <button onClick={nextLevel} type="button">
            Next Level
          </button>
        </>
      )}
    </div>
  );
}

export default HeroRoute;
