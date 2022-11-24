import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Levels from "../components/Levels";
import Puzzle from "../components/Puzzle";
import CityData from "../components/CityData";
// eslint-disable-next-line react/prop-types
function HeroRoute({ heroName }) {
  const [hero, setHero] = useState([]);
  const [level, setLevel] = useState(5);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5001/${heroName}`)
      .then((response) => response.json())
      .then((data) => {
        setHero(data);
      });
  }, []);

  const nextLevel = () => {
    setLevel(level + 1);
    setShowButton(false);
  };

  return (
    <div>
      {hero.length && (
        <>
          <h1>Sur les pas de Marco</h1>
          <h3>Level {level + 1}</h3>
          <Levels level={level} />
          <Puzzle img={hero[level].image} setShowButton={setShowButton} />
          {showButton && (
            <>
              <CityData city={hero[level]} />
              {level < 5 ? (
                <button onClick={nextLevel} type="button">
                  Next Level
                </button>
              ) : (
                <NavLink to="endgame">You've won</NavLink>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default HeroRoute;
