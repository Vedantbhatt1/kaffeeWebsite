import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Specialties from '../components/Specialties';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />

            {/* Stats Section */}
            <section style={{
                padding: '4rem 1rem',
                background: 'linear-gradient(180deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%)',
                borderBottom: '1px solid var(--glass-border)'
            }}>
                <div className="container" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    textAlign: 'center'
                }}>
                    <div>
                        <h3 style={{ fontSize: '3rem', color: 'var(--color-accent)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>10+</h3>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>Years of Excellence</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '3rem', color: 'var(--color-accent)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>50k+</h3>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>Cups Served</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '3rem', color: 'var(--color-accent)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>5k+</h3>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>Happy Customers</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '3rem', color: 'var(--color-accent)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>100%</h3>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>Organic Beans</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section style={{ padding: '6rem 1rem', textAlign: 'center', background: 'var(--color-bg-primary)' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{
                        marginBottom: '2rem',
                        fontSize: '3rem',
                        position: 'relative',
                        display: 'inline-block'
                    }}>
                        Where Every Cup Tells a Story
                        <span style={{
                            position: 'absolute',
                            bottom: '-10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '80px',
                            height: '3px',
                            background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
                            display: 'block'
                        }}></span>
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--color-text-secondary)',
                        lineHeight: '1.8',
                        fontWeight: '300'
                    }}>
                        At Kaffee Stories, we believe in the magic of a perfect brew.
                        Sourced from the finest beans and crafted with passion, our coffee is more than just a drink—it's an experience.
                        Every cup we serve carries the dedication of skilled farmers, the artistry of our baristas, and the warmth of our community.
                    </p>
                </div>
            </section>

            <Features />
            <Specialties />
            <Testimonials />
        </>
    );
};

export default Home;
