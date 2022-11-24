/* eslint-disable react/prop-types */
import React from "react";

function CityData({ place }) {
  return (
    <div>
      <h3>{place.quote}</h3>
      <h5>{place.text_history}</h5>
      <a href={place.ext_URL}>En savoir plus</a>
    </div>
  );
}

export default CityData;
