/* eslint-disable react/prop-types */
import React from "react";

function EstherModal({ showModal2 }) {
  return (
    <div>
      {showModal2 ? (
        <>
          <img src="./src/assets/esther.png" alt="Esther Stanhole" />
          <h2>Esther Stanhole</h2>
          <p> Ca donne pas grand chose</p>
          <button type="button">Choisir cet explorateur</button>
        </>
      ) : null}
    </div>
  );
}

export default EstherModal;
