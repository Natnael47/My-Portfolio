import React from 'react'
import profile_img from '../../assets/about_profile.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am experiEnced Front and Back end Developer</p>
                        <p>My passion for frontend development is not only </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React Js</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Next Js</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achive">
                <div className="about-ach">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-ach">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-ach">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About