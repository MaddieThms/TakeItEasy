/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

function MarcoModal({ showModal }) {
  return (
    <div>
      {showModal ? (
        <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="fullscreen pb-6 bg-backgroundHome svg-modal lg:items-center lg:justify-center lg:h-screen lg:overflow-hidden">
            <img
              className="p-10"
              src="./src/assets/marco.png"
              alt="Marco Polo"
            />
            <h2 className="text-title text-3xl">Marco Polo</h2>
            <p className="text-text p-6 text-xl">
              {" "}
              Marco Polo, né le 15 septembre 1254, à Venise, est un marchand
              vénitien, célèbre pour son voyage en Chine. À l'âge de 17 ans,
              Marco Polo part avec son père, et son oncle pour l'Asie, où il se
              met, avec eux, au service de Kubilai Khan, l'empereur mongol.
              Après avoir exercé diverses missions officielles durant une
              vingtaine d'années, il entreprend son voyage de retour à
              l'occasion d'une mission diplomatique.
            </p>
            <NavLink
              className="bg-title w-56 text-center h-16 font-semiboldpy-2 px-4 rounded ml-24"
              to="marco"
            >
              <span className="text-white text-center text-xl">
                Choisir Marco
              </span>
            </NavLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MarcoModal;
