import React, { useState, useEffect } from "react";
/* eslint-disable react/prop-types */
function EndGame() {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/marco`)
      .then((response) => response.json())
      .then((data) => {
        setHero(data);
      });
  }, []);

  return <div>{hero.length && <h1>{hero[0].quote}</h1>}</div>;
}

export default EndGame;
