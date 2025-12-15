import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Where Every Cup Tells a Story</h2>
                <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}>
                    At Kaffee Stories, we believe in the magic of a perfect brew.
                    Sourced from the finest beans and crafted with passion, our coffee is more than just a drink—it's an experience.
                </p>
            </div>
        </>
    );
};

export default Home;
