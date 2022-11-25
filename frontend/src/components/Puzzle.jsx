/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

function Puzzle({ city, setShowButton }) {
  const [text, setText] = useState("Découvrez les mystéres cryptés !");

  const set = () => {
    setText(`Bienvenue à ${city.city}`);
    setShowButton(true);
  };

  return (
    <div>
      <JigsawPuzzle
        imageSrc={city.image}
        // rows={level + 2}
        // columns={level + 2}
        rows={2} // Test Levels
        columns={2} // Test Levels
        onSolved={set}
        className="jigsaw-puzzle"
      />
      <h2 className="text-title text-3xl text-center mt-12">{text}</h2>
    </div>
  );
}

export default Puzzle;
