import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur odio iste, 
                    quisquam odit officia eos excepturi alias recusandae dolor voluptate. Laboriosam voluptatum aperiam error.
                     Aspernatur culpa maiores similique quisquam distinctio?</p>
                     <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                     </div>
            </div>
            <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivert</li>
                <li>Privacy & Policy</li>
              </ul>
            </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>91+ 6301561461</li>
                <li>bchandunayaknayak418@gmail.com</li>
              </ul>
            </div>
        </div>
        <hr />
        <p className="cory-right-text">Copyright 2024 @ chandunayak.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer