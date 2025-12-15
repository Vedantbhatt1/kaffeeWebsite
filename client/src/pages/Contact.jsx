import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Visit Us</h1>
                <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
                    <div className="contact-item">
                        <h3 style={{ color: 'var(--color-accent)' }}>Location</h3>
                        <p>123 Coffee Lane<br />Brew City, CA 90210</p>
                    </div>
                    <div className="contact-item">
                        <h3 style={{ color: 'var(--color-accent)' }}>Hours</h3>
                        <p>Mon-Fri: 7am - 8pm<br />Sat-Sun: 8am - 9pm</p>
                    </div>
                    <div className="contact-item">
                        <h3 style={{ color: 'var(--color-accent)' }}>Contact</h3>
                        <p>(555) 123-4567<br />hello@kaffeestories.com</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
