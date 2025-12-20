import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Mitchell',
            role: 'Regular Customer',
            rating: 5,
            text: 'The best coffee in town! The atmosphere is cozy and the staff is incredibly friendly. My go-to spot for morning meetings.',
            initial: 'S'
        },
        {
            name: 'David Chen',
            role: 'Coffee Enthusiast',
            rating: 5,
            text: 'Kaffee Stories has ruined all other coffee for me. Their signature blend is absolutely perfect, and the pastries are divine!',
            initial: 'D'
        },
        {
            name: 'Emma Rodriguez',
            role: 'Local Resident',
            rating: 5,
            text: 'A hidden gem! Whether I\'m working on my laptop or catching up with friends, this place never disappoints. Highly recommend!',
            initial: 'E'
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-header">
                    <h2>What Our Customers Say</h2>
                    <p>Join hundreds of happy coffee lovers</p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <FaQuoteLeft className="quote-icon" />
                            <div className="testimonial-rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} className="star-icon" />
                                ))}
                            </div>
                            <p className="testimonial-text">{testimonial.text}</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.initial}</div>
                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <span>{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
