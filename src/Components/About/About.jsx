import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="Decorative theme pattern" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="Shruti Nikam - Frontend Developer" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hello, I'm Shruti Nikam, a front-end developer dedicated to turning ideas into practical digital solutions. I'm in my Final year of BTech in Computer Science.</p>
                        <p>I'm passionate about my work and enjoy creating user-friendly interfaces. I'm always open to challenges that help me build my skills and improve my knowledge.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"> <p>JavaScript</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Next.js</p><hr style={{ width: "30%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>VIRTUAL INTERNSHIPS AND HACKATHONS</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>CERTIFICATIONS</p>
                </div>
            </div>
        </div>
    )
}

export default About
