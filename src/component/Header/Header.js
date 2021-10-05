import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.jpg'
import "./Header.css"
const Header = () => {
    return (
        <div className="header">
            {/* <div className="course-name">
                <h5>Programming Course</h5>
            </div> */}
            {/* <div className="logo"> */}
            <img src={logo} alt="" />
            {/* </div> */}
            <div className="menu-bar">
                <nav className="nav">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/services">Servicess</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;