import React from "react";

export default function Home() {
  return (
    <div className="bg-backgroundHome h-screen">
      <h1 className="text-6xl text-title text-center pt-20 mb-10">
        Sur les pas de...
      </h1>
      <p className="text-3xl text-text italic text-center mb-10">
        Choisissez votre personnage
      </p>
      <div className="flex w-fit flex-1 justify-center items-center">
        <img
          className="w-5/12 mr-6"
          src="./src/assets/marco.png"
          alt="Marco Polo"
        />
        <img className="w-5/12" src="./src/assets/esther.png" alt="Esther" />
      </div>
      <div className="flex justify-around items-center my-6 text-text">
        <h2>Marco</h2>
        <h2>Esther</h2>
      </div>
      <p className="">
        “Sur les pas de...” est un jeu interactif qui vous invite à un voyage
        dans le rôle de deux explorateurs emblématiques. Dans la peau de Marco
        Polo et Lady Esther Stanhope, vous pouvez découvrir les villes qu'ils
        ont parcourues.
      </p>
    </div>
  );
}
