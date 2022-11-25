import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Levels from "../components/Levels";
import Puzzle from "../components/Puzzle";
import CityData from "../components/CityData";
import "./HeroRoute.css";
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
    <div
      className={
        (heroName === "marco" && "bg-backgroundMarco h-screen") ||
        (heroName === "esther" && "bg-backgroundEsther h-screen")
      }
    >
      {hero.length && (
        <>
          <h1>Sur les pas de {heroName}</h1>
          <h3>Etape {level + 1}</h3>
          <Levels level={level} />
          <Puzzle img={hero[level].image} setShowButton={setShowButton} />
          {showButton && (
            <>
              <CityData city={hero[level]} />
              {level < 5 ? (
                <button onClick={nextLevel} type="button">
                  Prochaine destination
                </button>
              ) : (
                <NavLink to="endgame">Vous avez fini l'aventure</NavLink>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default HeroRoute;
