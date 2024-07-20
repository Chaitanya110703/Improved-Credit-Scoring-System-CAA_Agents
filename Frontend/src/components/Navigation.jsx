import React from "react";
import NavList from "./NavList";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Navigation() {
  const Navigate = useNavigate();
  const logout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/logout');
      const {success, message } = response.data;
      if(success) {
        Navigate("/")
      }else{
        console.log("Error:" + message);
      }
      // console.log("yess",response.data);
    } catch (error) {
      console.error('Logout failed:', error.response.data);
    }
  };
  
  return ( 
    <nav className="navbar navbar-expand-lg bg-secondary" data-bs-theme="dark">
      <div className="container-fluid d-flex justify-content-evenly">
        <Link className="navbar-brand fs-2" to="/home">
          CAA Agents
        </Link>
        <div className="" id="navbarColor04">
          <ul className="navbar-nav me-auto">
            <NavList pages="Home" where="/home" />
            <NavList pages="Credit Score" where="/creditscore" />
            <NavList pages="Loans" where="/loan" />
            <NavList pages="Ai Assistant" where="/Assistant" />
            <NavList pages="Simulator" where="/Simulator" /> 
            <NavList pages="Contact Us" where="/contact" />
            <NavList pages="About Us" where="/about" />
            <NavList textcolor="text-danger" onClick={logout} pages="Logout" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
