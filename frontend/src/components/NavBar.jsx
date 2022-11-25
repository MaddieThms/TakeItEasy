import React from "react";
import Logo from "../assets/logo.png";
import Marco from "../assets/marco.png";
import Esther from "../assets/esther.png";
/* eslint-disable react/prop-types */
function NavBar({ hero }) {
  return (
    <div className="flex justify-between mb-4 mx-4 pt-2">
      <img src={Logo} alt="Logo" className="h-12 w-12" />
      <img
        src={hero === "Marco" ? Marco : Esther}
        alt="hero"
        className="h-12 w-12"
      />
    </div>
  );
}

export default NavBar;
