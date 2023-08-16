import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function NavBar({handleRaptureToggle}){

    return (
        <nav className="navbar">
            <NavLink
            to="/" exact
            // className="navbarHeaders"
            activeStyle={{background: "darkblue"}}
            >
            Home
            </NavLink>
            <NavLink
            to="/showroom" exact
            // className="navbarHeaders"
            activeStyle={{background: "darkblue"}}
            >
            Showroom
            </NavLink>
            <NavLink
            to="/creator" exact
            // className="navbarHeaders"
            activeStyle={{background: "darkblue"}}
            >
            Creator
            </NavLink>
            <button onClick={handleRaptureToggle}>Toggle Columbia/Rapture</button>
        </nav>
        )
}

export default NavBar