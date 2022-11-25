import React, { useState, useEffect } from "react";
/* eslint-disable react/prop-types */
function EndGame({ heroName }) {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/marco`)
      .then((response) => response.json())
      .then((data) => {
        setHero(data);
      });
  }, []);

  return (
    <div className="bg-backgroundMarco min-h-screen flex flex-col justify-center">
      {hero.length && (
        <>
          <div className="h-[50vh]">
            <h1 className="text-6xl text-title text-center pt-20 mb-10">
              {heroName}, tu es {heroName === "Marco" ? "arrivé" : "arrivée"} à
              la fin de ton voyage !
            </h1>
          </div>
          <div className="endgame-pictures grid grid-cols-2 m-4 gap-2 h-[50vh]">
            {hero.map((place) => (
              <img
                key={place.id}
                src={place.image}
                alt={place.city}
                className="w-[45vw] h-[15vh]"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default EndGame;
