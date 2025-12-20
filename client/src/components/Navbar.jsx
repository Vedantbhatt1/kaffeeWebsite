import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCoffee, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo">
                    <FaCoffee className="logo-icon" />
                    <span>Kaffee Stories</span>
                </Link>

                <div className="mobile-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Our Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Our Story</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Visit Us</Link>
                    </li>
                    <li className="nav-item">
                        <a href="https://wa.me/919711646323" target="_blank" rel="noopener noreferrer" className="btn-primary nav-btn" onClick={() => setMobileMenuOpen(false)}>Book Table</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
