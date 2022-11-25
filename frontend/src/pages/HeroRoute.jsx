import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Levels from "../components/Levels";
import Puzzle from "../components/Puzzle";
import CityData from "../components/CityData";
import NavBar from "../components/NavBar";
// eslint-disable-next-line react/prop-types
function HeroRoute({ heroName }) {
  const [hero, setHero] = useState([]);
  const [level, setLevel] = useState(0);
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
      <NavBar hero={heroName === "Marco" ? "Marco" : "Esther"} />
      {hero.length && (
        <>
          <h1>Sur les pas de {heroName}</h1>
          <h3>Level {level + 1}</h3>
          <Levels level={level} />
          <Puzzle
            img={hero[level].image}
            setShowButton={setShowButton}
            level={level}
          />
          {showButton && (
            <>
              <CityData city={hero[level]} />
              {level < 5 ? (
                <button
                  className="text-title"
                  onClick={nextLevel}
                  type="button"
                >
                  Next Level
                </button>
              ) : (
                <NavLink to="endgame" heroName={heroName}>
                  You've won
                </NavLink>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default HeroRoute;
