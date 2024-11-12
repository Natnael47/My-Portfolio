import React from 'react'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
import './Contact.css'

const Contact = () => {
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="con-left">
                    <h1>Let's Talk</h1>
                    <p>I'm currently available to take on new project, so feel free to contact me</p>
                    <div className="con-details">
                        <div className="con-detail">
                            <img src={mail_icon} alt="" /> <p>Mymaill@gmail.com</p>
                        </div>
                        <div className="con-detail">
                            <img src={location_icon} alt="" /> <p>+251 900223365</p>
                        </div>
                        <div className="con-detail">
                            <img src={call_icon} alt="" /> <p>AA, Ethiopia</p>
                        </div>
                    </div>
                </div>
                <form className="con-right">
                    <label htmlFor="">You'r Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label htmlFor="">You'r Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email' />
                    <label htmlFor="">Write your Message Here</label>
                    <textarea name="message" rows='8' placeholder='Enter your Message'></textarea>
                    <button type='submit' className="con-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact