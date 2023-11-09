import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function NavBar({handleRaptureToggle, rapture}){

    return (
        <nav className={rapture?"navbarRapture":"navbarColumbia"}>
            {/* <NavLink
            className={rapture?"navbarLinksRapture":"navbarLinksColumbia"}
            to="/" exact
            // activeStyle={{background: "lightgrey"}}
            >
            Home
            </NavLink> */}
            <NavLink
            className={rapture?"navbarLinksRapture":"navbarLinksColumbia"}
            to="/" exact
            // activeStyle={{background: "lightgrey"}}
            >
            Showroom
            </NavLink>
            <NavLink
            className={rapture?"navbarLinksRapture":"navbarLinksColumbia"}
            to="/creator" exact
            // activeStyle={{background: "lightgrey"}}
            >
            Creator
            </NavLink>
            <button
            className={rapture?"navbarLinksColumbia":"navbarLinksRapture"}
            onClick={handleRaptureToggle}>{rapture?"Columbia":"Rapture"}</button>
        </nav>
        )
}

export default NavBar