import React, {Component} from 'react'
import './Footer.scss'
const Footer = () => (
    <div className="footer-wrapper">
           
           <div className="footer-container">
              <div className="footer-logo">
             
               
              </div>
         
            <div className="git">
                <h4>Get In Touch</h4>
                <ul className="get-in-touch">
                    <li>
                        <span><i className="fa fa-map-marker" aria-hidden="true"></i>Office Address</span>
                        <div>1707 Orolando Central pkwy <br />100 Orlando FL, USA</div>
                    </li>
                    <li>
                        <span><i className="fa fa-phone" aria-hidden="true"></i>Call Us 24/7</span>
                        <div>(814) 555 9653</div>
                    </li>
                    <li>
                        <span><i className="fa fa-envelope" aria-hidden="true"></i>Email Address</span>
                        <div>info@idk.com</div>
                    </li>
                </ul>
            </div>
            
            <div className="social">
                <h4>Social Links</h4>
                <ul className="social-icons">
                    <li className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></li>
                    <li className="icon"><i className="fa fa-instagram" aria-hidden="true"></i></li>
                    <li className="icon"><i className="fa fa-phone" aria-hidden="true"></i></li>
                    <li className="icon"><i className="fa fa-facebook" aria-hidden="true"></i></li>
                </ul>
            </div>
            <div style={{clear:'both'}}></div>
        </div>
        
        <div className="copyright">&copy; 2017 Tech_Uncenored</div>
    </div>
)

export default Footer