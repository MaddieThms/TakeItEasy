/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

function Puzzle({ img, setShowButton, level }) {
  const [text, setText] = useState("Unpuzzle the pieces!!");

  const set = () => {
    setText("Congratulations!!");
    setShowButton(true);
  };

  return (
    <>
      <h2 className="tag">{text}</h2>
      <JigsawPuzzle
        imageSrc={img}
        // rows={level + 2}
        // columns={level + 2}
        rows={2} // Test Levels
        columns={2} // Test Levels
        onSolved={set}
        className="jigsaw-puzzle"
      />
    </>
  );
}

export default Puzzle;
