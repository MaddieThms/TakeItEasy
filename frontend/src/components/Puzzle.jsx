/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

function Puzzle({ img, setShowButton }) {
  const [text, setText] = useState("Découvrez les mystéres cryptés !");

  const set = () => {
    setText("Félicitation !");
    setShowButton(true);
  };

  return (
    <div>
      <h2 className="text-sm text-[#011371]">{text}</h2>
      <JigsawPuzzle
        imageSrc={img}
        // rows={level + 2}
        // columns={level + 2}
        rows={2} // Test Levels
        columns={2} // Test Levels
        onSolved={set}
        className="jigsaw-puzzle"
      />
    </div>
  );
}

export default Puzzle;
