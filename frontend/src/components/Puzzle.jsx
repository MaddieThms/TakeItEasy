/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

function Puzzle({ place }) {
  const [text, setText] = useState("Unpuzzle the pieces!!");

  const set = () => {
    setText("Congratulations!!");
  };

  return (
    <>
      <h2 className="tag">{text}</h2>
      <JigsawPuzzle
        imageSrc={place.img}
        rows={3}
        columns={3}
        onSolved={set}
        className="jigsaw-puzzle"
      />
    </>
  );
}

export default Puzzle;
