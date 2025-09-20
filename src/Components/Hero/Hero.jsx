import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={profile_img} alt="" />
            <h1> <span >I'm Shruti Nikam,</span> Student of Computer Science & Engineering at DIET,Satara</h1>
            <p>I am a Final Year  Student acquiring a knowledge in the Full Stack Java developement</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With me,</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>

    )
}

export default Hero;
