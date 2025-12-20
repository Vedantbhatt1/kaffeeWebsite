import React from 'react';
import Navbar from '../components/Navbar';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const locations = [
        { name: 'Gurgaon Sector 51', phone: '9711646323' },
        { name: 'Rooftop Near Huda Metro', phone: '7011267479' },
        { name: 'Greater Noida', phone: '80765 85937' }
    ];

    return (
        <>
            <Navbar />
            <div className="contact-page">
                {/* Hero Section */}
                <section className="contact-hero">
                    <div className="container">
                        <h1>Visit Us</h1>
                        <p>We'd love to see you at Kaffee Stories</p>
                    </div>
                </section>

                {/* Contact Info Section */}
                <section className="contact-content">
                    <div className="container">
                        <div className="contact-grid">
                            {/* Left Side - Contact Cards */}
                            <div className="contact-info">
                                <div className="info-card location-card">
                                    <div className="info-icon">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="info-content">
                                        <h3>Main Location</h3>
                                        <p>966P, Sector 51 Rd</p>
                                        <p>Near Artemis Hospital, opposite Amity International School</p>
                                        <p>Sector 51, Gurugram, Haryana 122018</p>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon">
                                        <FaClock />
                                    </div>
                                    <div className="info-content">
                                        <h3>Hours</h3>
                                        <p>Mon - Thu, Sat - Sun: 8:00 AM - 11:45 PM</p>
                                        <p>Friday: 9:00 AM - 5:00 PM</p>
                                    </div>
                                </div>

                                <div className="info-card phone-card">
                                    <div className="info-icon">
                                        <FaPhone />
                                    </div>
                                    <div className="info-content">
                                        <h3>Our Locations</h3>
                                        {locations.map((location, index) => (
                                            <p key={index}>
                                                <strong>{location.name}:</strong> {location.phone}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - WhatsApp Booking + Email */}
                            <div className="right-column">
                                <div className="contact-map">
                                    <div className="whatsapp-booking">
                                        <FaWhatsapp className="whatsapp-icon" />
                                        <h3>Book Your Table</h3>
                                        <p>Reserve a table or order via WhatsApp</p>
                                        <a
                                            href="https://wa.me/919711646323"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="whatsapp-button"
                                        >
                                            <FaWhatsapp /> Chat on WhatsApp
                                        </a>
                                        <div className="map-note">
                                            <FaMapMarkerAlt className="map-icon-small" />
                                            <p>Find us in Sector 51, Gurugram</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="info-card email-card">
                                    <div className="info-icon">
                                        <FaEnvelope />
                                    </div>
                                    <div className="info-content">
                                        <h3>Email</h3>
                                        <p>hello@kaffeestories.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Section */}
                        <div className="social-section">
                            <h3>Follow Us</h3>
                            <div className="social-links">
                                <a href="#" className="social-link" aria-label="Facebook">
                                    <FaFacebook />
                                </a>
                                <a href="#" className="social-link" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="social-link" aria-label="Twitter">
                                    <FaTwitter />
                                </a>
                                <a href="https://wa.me/919711646323" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                                    <FaWhatsapp />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;
