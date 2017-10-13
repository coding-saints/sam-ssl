import React, {Component} from 'react'
import './Footer.scss'
const Footer = () => (
    <div className="footer-wrapper">
    <div className="footer-logo">Logo</div>
    
    <div className="address">
    SSL-Properties<br/>
    555 something Lane
    </div>
    <div className="social">
    <ul className="social-icons">
    <li className="icon">mail</li>
    <li className="icon">phone</li>
    <li className="icon">instagram</li>
    </ul>
    </div>
    <div className="copyright">&copy; 2017 Tech_Uncenored</div>
    </div>
)

export default Footer