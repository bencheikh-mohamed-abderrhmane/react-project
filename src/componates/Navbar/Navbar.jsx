import React, { useState } from "react";
import "./navbar.css";
import logo from "../assets/iconshop.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
        <div className="logo">
          <img src={logo} alt="Emirates Wings" />
          <h3>Emirates Wings</h3>
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Contacts</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">🔍</a></li>
        </ul>
        <div className="burger" onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
