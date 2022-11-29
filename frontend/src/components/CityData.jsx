/* eslint-disable react/prop-types */
import React from "react";

function CityData({ city, heroName }) {
  return (
    <div
      className={
        heroName === "Marco"
          ? "bg-backgroundMarco h-auto w-auto"
          : "bg-backgroundEsther h-auto w-auto"
      }
    >
      <p className="italic text-xl text-center py-4">{city.quote}</p>
      <p className="text-xl py-2 text-center">{city.text_history}</p>
      <a
        className="text-title py-4 hover:underline-offset-4 flex justify-center"
        href={city.ext_URL}
      >
        En savoir plus
      </a>
    </div>
  );
}

export default CityData;
