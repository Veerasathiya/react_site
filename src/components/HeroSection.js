import React from 'react'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/lily-vd.mp4" autoPlay loop muted />
            <h1 className="Hero-Text">Games Dev</h1>
            <p className="Hero-Sub-Text">Virtual World</p>
        </div>
    )
}

export default HeroSection
