import React, { useState } from "react";
import Filter from "../Filter/Filter";
import "./NavBar.css";

const NavBar = ({setActiveFiltre}) => {

    return (
        <nav className="navbar_container">
            <div className="nav">
                <div className="user">
                    <button className="filtre_button" type="button"><img src="./src/assets/images/list.png"/></button>
                </div>
                <div className="favorites">
                    <button className="filtre_button" type="button"><img src="./src/assets/images/list.png"/></button>
                </div>
                <div className="filter">
                    <Filter setActiveFiltre={setActiveFiltre}/>
                </div>  
            </div>         
        </nav>
    );
};

export default NavBar;