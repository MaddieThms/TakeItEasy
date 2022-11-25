import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
/* eslint-disable react/prop-types */
function EndGame({ heroName }) {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/${heroName}`)
      .then((response) => response.json())
      .then((data) => {
        setHero(data);
      });
  }, []);

  return (
    <div className="bg-backgroundMarco h-screen pb-4">
      <NavBar hero={heroName === "Marco" ? "Marco" : "Esther"} />
      {hero.length && (
        <>
          <div className="h-[35vh]">
            <h1 className="text-5xl text-title text-center pt-12 mb-8">
              {heroName}, tu es {heroName === "Marco" ? "arrivé" : "arrivée"} à
              la fin de ton voyage !
            </h1>
            <h2 className="text-center">
              Redécouvre chaque étape ton aventure :
            </h2>
          </div>
          <div className="endgame-pictures grid grid-cols-2 m-4 gap-2 h-auto">
            {hero.map((place) => (
              <img
                key={place.id}
                src={place.image}
                alt={place.city}
                className="w-[45vw] h-[16vh]"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default EndGame;
