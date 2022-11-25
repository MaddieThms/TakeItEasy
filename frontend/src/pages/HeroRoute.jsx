import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Puzzle from "../components/Puzzle";
import CityData from "../components/CityData";
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
        <div className="flex flex-col	justify-center mx-8">
          <h1 className="text-4xl text-title text-center pt-20 mb-10">
            Sur les pas de {heroName}
          </h1>
          <h2 className="text-center">Etape {level + 1}</h2>
          <div>
            <Puzzle img={hero[level].image} setShowButton={setShowButton} />
          </div>
          {showButton && (
            <>
              <CityData className="text-left" city={hero[level]} />
              {level < 5 ? (
                <button
                  className="w-7/12 lg:w-5/12"
                  onClick={nextLevel}
                  type="button"
                >
                  Prochaine destination
                </button>
              ) : (
                <NavLink to="endgame">Vous avez fini l'aventure</NavLink>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default HeroRoute;
