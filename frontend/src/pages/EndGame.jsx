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
    <div className="bg-backgroundMarco h-auto pb-20 flex flex-col justify-center ">
      <NavBar hero={heroName === "Marco" ? "Marco" : "Esther"} />
      {hero.length && (
        <>
          <div className="flex flex-col	justify-center h-auto w-screen">
            <h1 className="lg:text-6xl text-4xl text-title text-center mt-32 mb-8 px-8 lg:px-48">
              {heroName}, tu es {heroName === "Marco" ? "arrivé" : "arrivée"} à
              la fin de ton voyage !
            </h1>
            <h2 className="text-center my-16 lg:text-2xl">
              Redécouvre chaque étape ton aventure :
            </h2>
          </div>
          <div className="endgame-pictures grid grid-cols-2 m-4 gap-2">
            {hero.map((place) => (
              <img
                key={place.id}
                src={place.image}
                alt={place.city}
                className="w-[45vw] md:w-[43vw] h-[20vh] sm:h-[28vh] md:h-[45vh] md:mx-12 md:my-4"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default EndGame;
