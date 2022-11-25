/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

function MarcoModal({ showModal }) {
  return (
    <div className="bg-backgroundMarco">
      {showModal ? (
        <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="fullscreen pb-6 bg-backgroundHome svg-modal lg:items-center lg:justify-center lg:h-screen lg:overflow-hidden">
            <img
              className="p-10"
              src="./src/assets/marco.png"
              alt="Marco Polo"
            />
            <h2 className="text-title text-3xl">Marco Polo</h2>
            <p className="text-text p-6 text-xl lg:px-56 lg:pb-10 lg:text-2xl">
              {" "}
              Marco Polo, né en 1254, à Venise, est un marchand vénitien,
              célèbre pour son voyage en Chine. À l'âge de 17 ans, il part avec
              son père, et son oncle pour l'Asie, où il se met, avec eux, au
              service de Kubilai Khan, l'empereur mongol. Après avoir exercé
              diverses missions officielles durant une vingtaine d'années, il
              entreprend son voyage de retour à l'occasion d'une mission
              diplomatique.
            </p>
            <div className="flex w-screen justify-center">
              <NavLink
                className="bg-title w-56 text-center h-16 py-4 font-semibold px-4 rounded"
                to="marco"
              >
                <span className="text-white text-center text-xl">
                  Choisir Marco
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MarcoModal;
