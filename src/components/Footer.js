import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">

            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/profile">LinkedIn</Link>
                        <Link to="/profile">GitHub</Link>
                        <Link to="/profile">Instagram</Link>
                        
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/profile">Facebook</Link>
                        <Link to="/profile">Instagram</Link>
                        
                    </div>
                </div>
            </div>

            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                        𝕲𝖆𝖒𝖊𝖘 <i className="fas fa-gamepad"></i>
                        </Link>
                    </div>
                    <div className="social-icons">
                        <Link 
                            className="social-icon-link facebook"
                            to="/"
                            target='_blank'
                            aria-label='facebook'>
                            <i className="fab fa-facebook f"></i>
                        </Link>
                        <Link 
                            className="social-icon-link linkedin"
                            to="/"
                            target='_blank'
                            aria-label='linkedin'
                            >
                                <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link 
                            className="social-icon-link instagram"
                            to="/"
                            target='_blank'
                            aria-label='instagram'
                            >
                                <i className="fab fa-instagram"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
