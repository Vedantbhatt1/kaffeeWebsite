import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <div className='hero-container' style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>Taste the Tradition</h1>
                <p>Experience the finest coffee and cuisine in town.</p>
                <div className="hero-btns">
                    <Link to="/menu" className="btn-primary">View Menu</Link>
                    <Link to="/booking" className="btn-outline">Book a Table</Link>
                </div>
            </div>
            <div className="scroll-indicator">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    );
};

export default Hero;
