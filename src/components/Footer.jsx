import { Instagram, MailOutline, Twitter } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <div className="footer-container">
        <div className="left">
            <ul className="contact-list">
                <li className="contact-item">
                    <Instagram/> <span className="name">@FitBattles</span>
                </li>
                <li className="contact-item">
                    <Twitter/> <span className="name">@FitBattles</span>
                </li>
                <li className="contact-item">
                    <MailOutline/> <span className="name">enquiries@fitbattles.com</span>
                </li>
            </ul>
        </div>
        <div className="center">
        <ul className="legal-list">
        <li className="legal-item">
                Privacy Policy
            </li>
            <li className="legal-item">
                Terms of Use
            </li>
            <li className="legal-item">
                <Link to="/legal/faq" className="link">FAQ</Link>
            </li>
        </ul>
        </div>
        <div className="right"></div>
    </div>
  )
}

export default Footer