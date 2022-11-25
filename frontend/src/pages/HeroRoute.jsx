import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Puzzle from "../components/Puzzle";
import CityData from "../components/CityData";
import NavBar from "../components/NavBar";
import Levels from "../components/Levels";
// eslint-disable-next-line react/prop-types
function HeroRoute({ heroName }) {
  const [hero, setHero] = useState([]);
  const [level, setLevel] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const difficulty = useParams();

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
      <div
        className={
          (heroName === "Marco" && "bg-backgroundMarco h-auto") ||
          (heroName === "Esther" && "bg-backgroundEsther h-auto")
        }
      >
        <NavBar hero={heroName === "Marco" ? "Marco" : "Esther"} />
        {hero.length && (
          <div className="flex flex-col	justify-center mx-8">
            <h1 className="text-4xl text-title text-center pt-10 mb-8">
              Sur les pas de {heroName}
            </h1>
            <Levels level={level} />
            <h2 className="text-center">Etape {level + 1}</h2>
            <div>
              <Puzzle
                city={hero[level]}
                setShowButton={setShowButton}
                level={level}
                difficulty={difficulty.difficulty}
              />
            </div>
            {showButton && (
              <>
                <CityData city={hero[level]} heroName={heroName} />
                {level < 5 ? (
                  <div className="flex justify-center pb-4">
                    <button
                      className="bg-title w-56 h-12 my-4 font-semibold py-2 rounded text-white text-center text-xl"
                      onClick={nextLevel}
                      type="button"
                    >
                      Prochaine destination
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-center pb-4">
                    <NavLink
                      to="endgame"
                      heroName={heroName}
                      className="bg-title w-60 h-18 my-4 font-semibold py-2 rounded text-white text-center text-xl"
                    >
                      Vous avez fini l'aventure
                    </NavLink>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroRoute;
