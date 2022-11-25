/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

function Puzzle({ city, setShowButton, level }) {
  const [text, setText] = useState("Découvre la ville cachée !");
  const [difficulty] = useState(3);

  const set = () => {
    setText(`Bienvenue à ${city.city}`);
    setShowButton(true);
  };

  return (
    <div>
      {level < 3 ? (
        <JigsawPuzzle
          imageSrc={city.image}
          rows={difficulty} // Test Levels
          columns={difficulty} // Test Levels
          onSolved={set}
          className="jigsaw-puzzle"
        />
      ) : (
        <JigsawPuzzle
          imageSrc={city.image}
          rows={difficulty + 1} // Test Levels
          columns={difficulty + 1} // Test Levels
          onSolved={set}
          className="jigsaw-puzzle"
        />
      )}

      <h2 className="text-title text-3xl text-center mt-12">{text}</h2>
    </div>
  );
}

export default Puzzle;
