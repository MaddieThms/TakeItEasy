/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

function EstherModal({ showModal2 }) {
  return (
    <div>
      {showModal2 ? (
        <>
          <img src="./src/assets/esther.png" alt="Esther Stanhole" />
          <h2>Esther Stanhole</h2>
          <p> Ca donne pas grand chose</p>
          <NavLink to="marco">Esther Standhope</NavLink>
        </>
      ) : null}
    </div>
  );
}

export default EstherModal;
