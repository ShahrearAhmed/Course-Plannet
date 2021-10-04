import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Footer.css"
const Footer = () => {
    const element = <FontAwesomeIcon icon={faCopyright} />
    return (
        <div className="footer">
            <div className="left-div">
                <h1>Programming Course Plannet</h1>
                <h4>Contact With Us</h4>
                <p>Programming Plannet {element} courseplannet.com</p>
            </div>
            <div className="right-div">
                <h1>Hotline</h1>
                <h4>+001610687014</h4>
                <p>Dhaka Banni Ahmmed Tower,
                    Road: 17 Block: A</p>


            </div>

        </div>
    );
};

export default Footer;