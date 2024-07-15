import React from "react";
import NavList from "./NavList";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary" data-bs-theme="dark">
      <div className="container-fluid d-flex justify-content-evenly">
        <Link className="navbar-brand" to="/home">
          CAA Agents
        </Link>
        <div className="" id="navbarColor04">
          <ul className="navbar-nav me-auto">
            <NavList pages="Home" where="/home" />
            <NavList pages="Credit Score" where="/creditscore" />
            <NavList pages="Contact Us" where="/contact" />
            <NavList pages="About Us" where="/about" />
            <NavList textcolor="text-danger" pages="Logout" where="/" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
