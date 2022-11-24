/* eslint-disable react/prop-types */
import React from "react";

function MarcoModal({ showModal }) {
  return (
    <div>
      {showModal ? (
        <>
          <img src="./src/assets/marco.png" alt="Marco Polo" />
          <h2>Marco Polo</h2>
          <p>
            {" "}
            Marco Polo, né le 15 septembre 1254, à Venise, est un marchand
            vénitien, célèbre pour son voyage en Chine. À l'âge de 17 ans, Marco
            Polo part avec son père, Niccolò, et son oncle Matteo pour l’Asie,
            où il se met, avec eux, au service de Kubilai Khan, l'empereur
            mongol. Après avoir exercé diverses missions officielles durant une
            vingtaine d'années, il entreprend son voyage de retour à l'occasion
            d'une mission diplomatique.
          </p>
          <button type="button">Choisir cet explorateur</button>
        </>
      ) : null}
    </div>
  );
}

export default MarcoModal;
