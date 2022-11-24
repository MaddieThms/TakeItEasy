/* eslint-disable react/prop-types */
import React from "react";

function HeroesModal({ showModal }) {
  return (
    <div className="h-screen">
      {showModal ? (
        <>
          <img src="./src/assets/marco.png" alt="Marco Polo" />
          <h2>Marco Polo</h2>
          <p>hi</p>
        </>
      ) : null}
    </div>
  );
}

export default HeroesModal;
