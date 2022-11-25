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
    <div className="bg-backgroundHome h-max-screen">
      <h1 className="text-6xl text-title text-center pt-20 mb-10">
        Sur les pas de...
      </h1>
      <p className="text-2xl text-text italic text-center mb-10">
        Choisissez votre personnage
      </p>
      <div className="flex flex-col md:flex-row w-screen flex-1 justify-center lg:justify-center items-center">
        <button
          className="w-7/12 mb-10"
          type="button"
          onClick={handleShowModal}
        >
          <MarcoModal showModal={showModal} />
          <img src="./src/assets/marco.png" alt="Marco Polo" />
          <h2 className="text-2xl text-text">Marco</h2>
        </button>
        <button className="w-7/12" type="button" onClick={handleShowModal2}>
          <EstherModal showModal2={showModal2} />
          <img src="./src/assets/esther.png" alt="Esther" />
          <h2 className="text-2xl text-text">Esther</h2>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center mt-12">
        <h2 className="text-4xl text-title">Concept</h2>
        <p className="text-text text-xl text-center px-12 py-6">
          “Sur les pas de...” est un jeu interactif qui vous invite à un voyage
          dans le rôle de deux explorateurs emblématiques. Dans la peau de Marco
          Polo et Lady Esther Stanhope, vous pouvez découvrir les villes qu’ils
          ont parcourues.
        </p>
      </div>
    </div>
  );
}
