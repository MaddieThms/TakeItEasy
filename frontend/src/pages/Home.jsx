import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center">Sur les pas de...</h1>
      <h2 className="text-3xl text-center mb-10">
        Choisissez votre personnage
      </h2>
      <main className="flex w-fit flex-1 justify-evenly items-center">
        <img className="w-3/12" src="./src/assets/marco.png" alt="Marco Polo" />
        <img className="w-3/12" src="./src/assets/esther.png" alt="Esther" />
        <NavLink to="marco">Marco Polo</NavLink>
      </main>
    </div>
  );
}
