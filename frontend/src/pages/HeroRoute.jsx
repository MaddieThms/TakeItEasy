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
        (heroName === "Marco" && "bg-backgroundMarco h-screen") ||
        (heroName === "Esther" && "bg-backgroundEsther h-screen")
      }
    >
      <NavBar hero={heroName === "Marco" ? "Marco" : "Esther"} />
      {hero.length && (
        <div className="flex flex-col	justify-center mx-8">
          <h1 className="text-4xl text-title text-center pt-10 mb-8">
            Sur les pas de {heroName}
          </h1>
          <h2 className="text-center">Etape {level + 1}</h2>
          <div>
            <Puzzle img={hero[level].image} setShowButton={setShowButton} />
          </div>
          {showButton && (
            <>
              <CityData city={hero[level]} heroName={heroName} />
              {level < 5 ? (
                <div className="flex justify-center">
                  <button
                    className="bg-title w-56 h-12 py-2 my-4 font-semiboldpy-2 rounded text-white text-center text-xl"
                    onClick={nextLevel}
                    type="button"
                  >
                    Prochaine destination
                  </button>
                </div>
              ) : (
                <NavLink to="endgame" heroName={heroName}>
                  Vous avez fini l'aventure
                </NavLink>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default HeroRoute;
