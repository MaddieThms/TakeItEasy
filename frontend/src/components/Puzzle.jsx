/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

function Puzzle({ city, setShowButton, level, difficulty }) {
  const [text, setText] = useState("Découvre la ville cachée !");
  const [columnRows, setColumnRows] = useState(0);

  useEffect(() => {
    if (difficulty === "facile") {
      setColumnRows(2);
    } else if (difficulty === "moyen") {
      setColumnRows(3);
    } else if (difficulty === "difficile") {
      setColumnRows(4);
    }
  }, []);

  useEffect(() => {
    setText("Découvre la ville cachée !");
  }, [level]);

  const set = () => {
    setText(`Bienvenue à ${city.city}`);
    setShowButton(true);
  };

  return (
    <div>
      {columnRows > 0 && (
        <>
          {level < 3 ? (
            <JigsawPuzzle
              imageSrc={city.image}
              rows={columnRows} // Test Levels
              columns={columnRows} // Test Levels
              onSolved={set}
              className="jigsaw-puzzle"
            />
          ) : (
            <JigsawPuzzle
              imageSrc={city.image}
              rows={columnRows + 1} // Test Levels
              columns={columnRows + 1} // Test Levels
              onSolved={set}
              className="jigsaw-puzzle"
            />
          )}

          <h2 className="text-title text-3xl text-center mt-12">{text}</h2>
        </>
      )}
    </div>
  );
}

export default Puzzle;
