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
        rows={2}
        columns={2}
        onSolved={set}
        className="jigsaw-puzzle"
      />
    </div>
  );
}

export default Puzzle;
