import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/comic-logo.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="Header--logo">
          <img src={Logo} alt="Logo" />
          <h1>My Comics!</h1>
        </div>
      </Link>
      <Link to="/my-list" style={{ textDecoration: "none", color: "inherit" }}>
        <h3 className="Header--nav">My rated comics</h3>
      </Link>
    </header>
  );
};

export default Header;
