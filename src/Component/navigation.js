import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {

    return (

        <div>
            <NavLink to="/">HOME</NavLink> &nbsp;&nbsp;&nbsp;
            <NavLink to="/about">ABOUT</NavLink> &nbsp;&nbsp;&nbsp;
            <NavLink to="/contact">CONTACT</NavLink>
        </div>
    )
}

export default Navigation;