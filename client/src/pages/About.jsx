import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
    return (
        <>
            <Navbar />
            <div className="container" style={{ paddingTop: '120px', maxWidth: '800px' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>Our Story</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-text-secondary)' }}>
                    Kaffee Stories began with a simple idea: that coffee is more than just a drink. It's a conversation starter, a morning ritual, and a way to bring people together.
                </p>
                <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-text-secondary)' }}>
                    Our beans are ethically sourced from the best growers around the world, roasted in small batches to preserve their unique flavors. We believe in quality, sustainability, and community.
                </p>
            </div>
        </>
    );
};

export default About;
