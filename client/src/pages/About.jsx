import React from 'react';
import Navbar from '../components/Navbar';
import { FaHeart, FaLeaf, FaUsers, FaAward, FaUtensils, FaGlassCheers } from 'react-icons/fa';
import './About.css';

const About = () => {
    const values = [
        {
            icon: <FaHeart />,
            title: 'Passion',
            description: 'Every cup is crafted with dedication and love for the art of coffee-making.'
        },
        {
            icon: <FaLeaf />,
            title: 'Sustainability',
            description: 'We prioritize eco-friendly practices and support sustainable farming.'
        },
        {
            icon: <FaUsers />,
            title: 'Community',
            description: 'Building connections and fostering a welcoming space for all.'
        },
        {
            icon: <FaAward />,
            title: 'Quality',
            description: 'Uncompromising standards in sourcing, roasting, and brewing.'
        }
    ];

    const services = [
        {
            icon: <FaUtensils />,
            title: 'Restaurant & Cafe',
            description: 'Our chefs blend traditional flavors with contemporary twists to create dishes that tantalize the taste buds. From hearty breakfasts to intimate dinners, savor freshly brewed coffee and delectable desserts in our welcoming space.'
        },
        {
            icon: <FaGlassCheers />,
            title: 'Banquet & Conference Hall',
            description: 'Elegance meets functionality in our versatile event spaces. Perfect for weddings, celebrations, corporate seminars, and conferences. Impeccable service and state-of-the-art amenities ensure seamless execution of your special moments.'
        }
    ];

    return (
        <>
            <Navbar />
            <div className="about-page">
                {/* Hero Section */}
                <section className="about-hero">
                    <div className="container">
                        <h1>Our Story</h1>
                        <p>Where Every Moment is a Tale to be Told</p>
                    </div>
                </section>

                {/* Story Section */}
                <section className="about-story">
                    <div className="container">
                        <div className="story-content">
                            <h2>Welcome to Kaffee Stories</h2>
                            <p>
                                At Kaffee Stories, we don't just serve food and beverages; we craft experiences that
                                linger in the memory long after the last sip and bite. Nestled in the bustling cityscapes
                                of Gurgaon and Greater Noida, our establishment is a fusion of elegance, taste, and
                                versatility, catering to a diverse array of needs and occasions.
                            </p>
                            <p>
                                Step into our space where each dish is a chapter in the Kaffee Stories narrative. Whether
                                you're craving a hearty breakfast to kickstart your day, a leisurely lunch with colleagues,
                                or an intimate dinner with loved ones, our menu offers something for every palate. Savor
                                the aroma of freshly brewed coffee as you indulge in delectable desserts or engage in
                                stimulating conversations over perfectly brewed artisanal tea.
                            </p>
                            <p>
                                Excellence is not just a goal; it's our way of life. We take pride in sourcing the finest
                                ingredients, delivering exceptional service, and creating an ambiance that exudes warmth
                                and hospitality. Whether you're dining with us, hosting an event, or simply stopping by
                                for a quick coffee, our dedicated team is committed to exceeding your expectations and
                                making every moment memorable.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="about-services">
                    <div className="container">
                        <h2>Our Offerings</h2>
                        <p className="services-subtitle">Discover the experiences we create</p>
                        <div className="services-grid">
                            {services.map((service, index) => (
                                <div key={index} className="service-card">
                                    <div className="service-icon">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="about-values">
                    <div className="container">
                        <h2>Our Values</h2>
                        <p className="values-subtitle">The principles that guide everything we do</p>
                        <div className="values-grid">
                            {values.map((value, index) => (
                                <div key={index} className="value-card">
                                    <div className="value-icon">{value.icon}</div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="about-cta">
                    <div className="container">
                        <h2>Experience Kaffee Stories Today</h2>
                        <p>
                            Join us and embark on a journey of culinary delights, heartfelt conversations, and
                            unforgettable moments. Whether you're a local resident, a corporate professional, or
                            a visitor exploring the vibrant cities of Gurgaon and Greater Noida, we invite you to
                            be a part of our story.
                        </p>
                        <p className="cta-tagline">
                            After all, at Kaffee Stories, every moment is a tale waiting to be told.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;
