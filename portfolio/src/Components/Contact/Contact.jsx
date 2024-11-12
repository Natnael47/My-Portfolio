import React, { useState } from 'react';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import mail_icon from '../../assets/mail_icon.svg';
import theme_pattern from '../../assets/theme_pattern.svg';
import './Contact.css';

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "cf9c7243-3c5e-420a-ab57-a7105f44d16d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            setSuccessMessage("Thank you! Your message has been sent successfully.");
            event.target.reset(); // Clears the form

            // Hide the success message after a few seconds
            setTimeout(() => setSuccessMessage(null), 3000);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="con-left">
                    <h1>Let's Talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to contact me</p>
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
                <form onSubmit={onSubmit} className="con-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' required />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email' required />
                    <label htmlFor="">Write your Message Here</label>
                    <textarea name="message" rows='8' placeholder='Enter your Message' required></textarea>
                    <button type='submit' className="con-submit">Submit now</button>
                </form>
            </div>
            {successMessage && <div className="success-message">{successMessage}</div>}
        </div>
    )
}

export default Contact;
