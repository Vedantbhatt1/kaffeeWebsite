import React from 'react';
import { FaCoffee, FaLeaf, FaHeart, FaUsers } from 'react-icons/fa';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: <FaCoffee />,
            title: 'Premium Beans',
            description: 'Ethically sourced from the world\'s finest coffee regions, roasted to perfection.'
        },
        {
            icon: <FaUsers />,
            title: 'Expert Baristas',
            description: 'Our skilled team crafts each cup with precision and passion for excellence.'
        },
        {
            icon: <FaHeart />,
            title: 'Cozy Atmosphere',
            description: 'A warm, inviting space designed for relaxation and meaningful conversations.'
        },
        {
            icon: <FaLeaf />,
            title: 'Sustainable',
            description: 'Committed to eco-friendly practices and supporting local communities.'
        }
    ];

    return (
        <section className="features-section">
            <div className="container">
                <div className="features-header">
                    <h2>Why Choose Kaffee Stories</h2>
                    <p>Experience coffee crafted with care, served with heart</p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
