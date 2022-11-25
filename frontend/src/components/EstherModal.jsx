/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

function EstherModal({ showModal2 }) {
  return (
    <div>
      {showModal2 ? (
        <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="fullscreen pb-6 bg-backgroundHome svg-modal lg:items-center lg:justify-center lg:h-screen lg:overflow-hidden">
            <img
              className="p-10"
              src="./src/assets/esther.png"
              alt="Esther Stanhole"
            />
            <h2 className="text-title text-3xl">Esther Stanhole</h2>
            <p className="text-text p-6 text-xl lg:px-56 lg:pb-10 lg:text-2xl">
              Lady Esther (ou Hester) Stanhope, née en 1776, est une aristocrate
              britannique devenue aventurière au Proche-Orient1. Elle fut
              proclamée « reine de Palmyre » par des tribus de bédouins, avant
              de devenir une sorte de « prophétesse » dans le pays druze, au
              Liban. La Revue des deux Mondes de 1845 la décrit comme « reine de
              Tadmor, sorcière, prophétesse, patriarche, chef arabe ».
            </p>
            <div className="flex flex-col w-screen items-center justify-center gap-6">
              <NavLink
                className=" bg-title w-56 text-center h-16 py-4 font-semibold px-4 rounded hover:scale-105"
                to="esther/facile"
              >
                <span className="navlink text-white text-center text-xl">Facile</span>
              </NavLink>
              <NavLink
                className=" bg-title w-56 text-center h-16 py-4 font-semibold px-4 rounded hover:scale-105"
                to="esther/moyen"
              >
                <span className="navlink text-white text-center text-xl">Moyen</span>
              </NavLink>
              <NavLink
                className=" bg-title w-56 text-center h-16 py-4 font-semibold px-4 rounded hover:scale-105"
                to="esther/difficile"
              >
                <span className="navlink text-white text-center text-xl text-font">
                  Difficile
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default EstherModal;
