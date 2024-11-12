import React from 'react'
import profile_img from '../../assets/profile_img.svg'
import './Hero.css'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Alex Bennett,</span> Full stack Developer Base in Ethiopia</h1>
            <p>I'm both front and back end developer from Addis Abeba</p>
            <div className="hero-action">
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero