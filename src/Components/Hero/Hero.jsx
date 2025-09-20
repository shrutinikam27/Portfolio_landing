import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="Shruti Nikam - Frontend Developer" className='hero-img' />
            <h1>I'm <span>Shruti Nikam</span></h1>
            <p>Frontend Developer passionate about creating beautiful and functional web experiences</p>
            <div className="hero-action">
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero
