import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import './Menu.css';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('All'); // 'All', 'Veg', 'Vegan', 'Gluten-Free'

    const { addToCart } = useCart();

    useEffect(() => {
        fetch('http://localhost:5001/api/menu')
            .then(res => res.json())
            .then(data => {
                setMenuItems(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching menu:", err);
                setLoading(false);
            });
    }, []);

    const categories = ['All', ...new Set(menuItems.map(item => item.category))];
    const filters = ['All', 'Veg', 'Vegan', 'Gluten-Free'];

    const filteredItems = menuItems.filter(item => {
        const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = activeFilter === 'All' || (item.tags && item.tags.includes(activeFilter));
        return matchesCategory && matchesSearch && matchesFilter;
    });

    return (
        <>
            <Navbar />
            <div className="menu-page">
                <div className="menu-header">
                    <h1>Our Menu</h1>
                    <p>Explore our wide range of exquisite tastes.</p>
                </div>

                <div className="container">
                    {/* Controls Section */}
                    <div className="menu-controls">
                        {/* Search Bar */}
                        <div className="search-bar">
                            <FaSearch className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search our menu..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Dietary Filter */}
                        <div className="dietary-filter">
                            {filters.map(filter => (
                                <button
                                    key={filter}
                                    className={`filter-tag ${activeFilter === filter ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(filter)}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="category-filter">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Menu Grid */}
                    {loading ? (
                        <div className="loading">Loading Menu...</div>
                    ) : filteredItems.length === 0 ? (
                        <div className="no-results">No items found. Try different filters.</div>
                    ) : (
                        <div className="menu-grid">
                            {filteredItems.map(item => (
                                <div key={item.id} className="menu-card">
                                    <div className="menu-card-image-container">
                                        {item.image ? (
                                            <img src={item.image} alt={item.name} className="menu-card-image" loading="lazy" />
                                        ) : (
                                            <div className="menu-card-placeholder" />
                                        )}
                                    </div>
                                    <div className="menu-card-content">
                                        <div className="menu-card-header">
                                            <h3>{item.name}</h3>
                                            <span className="price">₹{item.price}</span>
                                        </div>
                                        <p className="description">{item.description}</p>

                                        <div className="card-tags">
                                            {item.tags?.map(tag => (
                                                <span key={tag} className="tag-badge">{tag}</span>
                                            ))}
                                        </div>

                                        <button
                                            className="add-to-cart-btn"
                                            onClick={() => addToCart(item)}
                                        >
                                            <FaShoppingCart /> Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Menu;
