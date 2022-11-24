/* eslint-disable react/prop-types */
import React from "react";

function HeroesModal({ hero, showModal, setChosenHero }) {
  return (
    <div>
      {showModal ? (
        <>
          <img src={hero.heroImage} alt={hero.heroName} />
          <h2>{hero.heroName}</h2>
          <p>{hero.heroDescription}</p>
          <button type="button" onClick={setChosenHero}>
            Choisir cet explorateur
          </button>
        </>
      ) : null}
    </div>
  );
}

export default HeroesModal;
