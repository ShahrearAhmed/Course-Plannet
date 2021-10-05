import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className="contact">
            <div className="title-contact">
                <h1>Contact Us</h1>
                <div >
                    <input className="input" type="text" id="fname" name="firstname" placeholder="Your name" />
                    <br />

                    <input className="input" type="text" id="fname" name="fname" placeholder="name@example.com" /><br />

                    <input className="input" type="text" id="lname" name="lname" placeholder="Subject" /><br /><br />
                    <input className="message" type="text" id="lname" name="lname" placeholder="Message" /><br /><br />
                    <input className="submit" type="submit" value="Submit" />

                </div>
                <div className="info">
                    <p>Conditions: If you are a member of the press looking to contact the Course Plennet Foundation, our press department can be contacted at press@plennet.org , or by phoning +01610687014. We also have international contacts, some of whom work for various affiliated organisations and some of whom are editors. Our press room contains more information, along with materials about Plennet,
                        the Plennet Foundation, and other projects it hosts.

                    </p><br />
                    <h4>+001610687014
                        Dhaka Banni Ahmmed Tower, Road: 17 Block: A</h4>
                </div>
            </div>

        </div>



    );
};

export default Contact;