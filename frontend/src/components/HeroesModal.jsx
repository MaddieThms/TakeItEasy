import React from "react";

function HeroesModal({ hero, showModal }) {
  return (
    <div>
      {showModal ? (
        <>
          <img src="close.png" onClick={!showModal} />
          <img src={hero.heroImage} alt={hero.heroName} />
          <h2>{hero.heroName}</h2>
          <p>{hero.heroDescription}</p>
          <button onClick={setChosenHero}>Choisir cet explorateur</button>
        </>
      ) : null}
    </div>
  );
}

export default HeroesModal;
