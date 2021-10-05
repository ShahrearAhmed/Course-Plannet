import React from 'react';
import './About.css'
import img from '../../../img/about.jpg'
const About = () => {
    return (
        <div>

            <h1 className="about">About Us</h1>
            <img className="img" src={img} alt="" />
            <p className="description">If you want to begin programming, start here.
                In this fast-paced and entertaining course,
                What Is Programming, you'll learn the fundamentals,
                the essential ideas, and the concepts for success in any programming language. First, you'll learn how to write a computer program and learn how to get the computer to understand it. Next, you'll learn all about the syntax - or rules of programming languages. Finally, you'll explore how to make real-world programming easier, from libraries to frames, to SDKs and APIs.
                By the end of this course, you will not only be on your way to becoming a software developer, but will also have learned how to work with them,
                manage them, or live with one.</p>
        </div>
    );
};

export default About;