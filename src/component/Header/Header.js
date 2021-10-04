import React from 'react';
import logo from '../../img/logo.jpg'
import "./Header.css"
const Header = () => {
    return (
        <div className="header">
            <div className="course-name">
                <h5>Programming Course</h5>
            </div>
            {/* <div className="logo">
                <img src={logo} alt="" />
            </div> */}
            <div className="menu-bar">
                <nav>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Servicess</a>
                    <a href="/contact">Contact Us</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;