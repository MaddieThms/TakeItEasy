/* eslint-disable react/prop-types */
import React from "react";

function CityData({ city, heroName }) {
  return (
    <div
      className={
        heroName === "Marco" ? "bg-backgroundMarco" : "bg-backgroundEsther"
      }
    >
      <h3>{city.quote}</h3>
      <h5>{city.text_history}</h5>
      <a href={city.ext_URL}>Website</a>
    </div>
  );
}

export default CityData;
