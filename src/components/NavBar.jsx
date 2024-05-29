import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logo" src="/logo192.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Rockets</Link>
        </li>
        <li>
          <Link to="/Missions">Missions</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
