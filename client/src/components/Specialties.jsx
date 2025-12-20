import React from 'react';
import { Link } from 'react-router-dom';
import './Specialties.css';

const Specialties = () => {
    const specialties = [
        {
            title: 'Signature Blend',
            description: 'Our house special - a perfectly balanced medium roast with notes of chocolate and caramel',
            tag: 'Bestseller'
        },
        {
            title: 'Artisan Pastries',
            description: 'Freshly baked daily by our in-house pastry chef using organic ingredients',
            tag: 'New'
        },
        {
            title: 'Cold Brew Collection',
            description: 'Smooth, refreshing cold brews infused with unique flavors for any season',
            tag: 'Popular'
        }
    ];

    return (
        <section className="specialties-section">
            <div className="container">
                <div className="specialties-header">
                    <h2>Our Specialties</h2>
                    <p>Discover what makes us unique</p>
                </div>
                <div className="specialties-grid">
                    {specialties.map((specialty, index) => (
                        <div key={index} className="specialty-card">
                            <div className="specialty-tag">{specialty.tag}</div>
                            <div className="specialty-content">
                                <h3>{specialty.title}</h3>
                                <p>{specialty.description}</p>
                            </div>
                            <div className="specialty-overlay"></div>
                        </div>
                    ))}
                </div>
                <div className="specialties-cta">
                    <Link to="/menu" className="btn-primary">Explore Full Menu</Link>
                </div>
            </div>
        </section>
    );
};

export default Specialties;
