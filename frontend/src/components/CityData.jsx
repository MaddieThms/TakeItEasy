/* eslint-disable react/prop-types */
import React from "react";

function CityData({ place }) {
  return (
    <div>
      <h3>{place.citation}</h3>
      <h5>{place.histoire}</h5>
      <a href={place.site}>Website</a>
    </div>
  );
}

export default CityData;
