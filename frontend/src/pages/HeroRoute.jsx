import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
    <div
      className={
        (heroName === "marco" && "bg-backgroundMarco h-screen") ||
        (heroName === "esther" && "bg-backgroundEsther h-screen")
      }
    >
      <NavBar hero={heroName === "Marco" ? "Marco" : "Esther"} />
      {hero.length && (
        <>
          <h1 className="text-title">Sur les pas de {heroName}</h1>
          <h3>Etape {level + 1}</h3>
          <Puzzle img={hero[level].image} setShowButton={setShowButton} />
          {showButton && (
            <>
              <CityData city={hero[level]} />
              {level < 5 ? (
                <button onClick={nextLevel} type="button">
                  Prochaine destination
                </button>
              ) : (
                <NavLink to="endgame" heroName={heroName}>
                  Vous avez fini l'aventure
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
