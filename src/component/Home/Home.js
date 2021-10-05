import React, { useEffect, useState } from 'react';
import img from '../../img/banner.jpg'
import Course from '../Course/Course';
import "./Home.css"
const Home = () => {
    return (

        <div className="title">
            <h1>Why us</h1>
            <div className="banner">
                <img src={img} alt="" />
            </div>
            <div className="some-info">
                <div>
                    <h2>What is Programming?</h2>
                    <p>Basically programming is writing
                        instructions that tell a
                        computer what to do and how to do it.
                        There are several languages that can
                        be used for programming,
                        such as JavaScript, C, and Python,
                        each with their own specific set of
                        rules, but also following many
                        universal programming principles.</p>
                </div>
                <div>
                    <h2>What is programming used for?</h2>
                    <p>Programming can be used for an
                        almost endless list of things,
                        but ultimately it helps automate
                        tasks and perform them quickly, effectively,
                        and accurately. Programming languages are used to
                        develop softwares, websites, applications,
                        and so much more.</p>
                </div>
                <div>
                    <h2>What will I learn in this course?</h2>
                    <p>In this programming basics course you will learn about:

                        What code is and how it is structured
                        How to get a computer to understand you
                        The rules of programming languages
                        Syntax, case sensitivity, whitespace, commenting, keywords, etc.
                        Working with data
                        Managing program flow
                        Making things modular
                        Programming in the real world
                        Much more</p>
                </div>
                <div>
                    <h2>Who is this course for?</h2>
                    <p>This course is for absolute beginners to
                        the world of programming! If you've never
                        written a line of code in your life, this
                        is the place to start. Also for those who just want to
                        review the basics of programming.</p>
                </div>
            </div>
            <Course></Course>
        </div>



    );
};

export default Home;