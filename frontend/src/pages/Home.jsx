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
    <div className="bg-backgroundHome h-screen">
      <h1 className="text-6xl text-title text-center pt-20 mb-10">
        Sur les pas de...
      </h1>
      <p className="text-3xl text-text italic text-center mb-10">
        Choisissez votre personnage
      </p>
      <main className="flex flex-col md:flex-row w-9/12 flex-1 justify-evenly items-center">
        <button
          className="w-7/12 lg:w-5/12 mb-10"
          type="button"
          onClick={handleShowModal}
        >
          <MarcoModal showModal={showModal} />
          <img src="./src/assets/marco.png" alt="Marco Polo" />
        </button>
        <button
          className="w-7/12 lg:w-5/12"
          type="button"
          onClick={handleShowModal2}
        >
          <EstherModal showModal2={showModal2} />
          <img src="./src/assets/esther.png" alt="Esther" />
        </button>
      </main>
    </div>
  );
}
