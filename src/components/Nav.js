import React from "react";
import { FaGlobeAmericas, FaInstagram } from "react-icons/fa";

const Nav = ({ url }) => {
  return (
    <nav className="navbar">
      <FaGlobeAmericas />
      <a href={url}>
        <FaInstagram />
      </a>
    </nav>
  );
};

export default Nav;
