import React from 'react'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>I am a frontend developer from, Addis Abeba Et with 10 years of experiance</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your Email' />
                    </div>
                    <div className="footer-sub">
                        Subscribe
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">2034 Alex Bennett. all rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer