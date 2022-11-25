import React, { useState } from "react";
import MarcoModal from "../components/MarcoModal";
import EstherModal from "../components/EstherModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const handleShowModal2 = () => {
    setShowModal2(!showModal2);
  };
  return (
    <div>
      <h1 className="text-6xl font-bold text-center">Sur les pas de...</h1>
      <h2 className="text-3xl text-center mb-10">
        Choisissez votre personnage
      </h2>
      <main className="flex w-fit flex-1 justify-evenly items-center">
        <button type="button" onClick={handleShowModal}>
          <MarcoModal showModal={showModal} />
          <img
            className="w-3/12"
            src="./src/assets/marco.png"
            alt="Marco Polo"
          />
        </button>
        <button type="button" onClick={handleShowModal2}>
          <EstherModal showModal2={showModal2} />
          <img className="w-3/12" src="./src/assets/esther.png" alt="Esther" />
        </button>

        <h1>Concept</h1>
        <h3>
          “Sur les pas de...” est un jeu interactif qui vous invite à un voyage
          dans le rôle de deux explorateurs emblématiques. Dans la peau de Marco
          Polo et Lady Esther Stanhope, vous pouvez découvrir les villes qu’ils
          ont parcourues.
        </h3>
      </main>
    </div>
  );
}
