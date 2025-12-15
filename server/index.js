const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true
}));
app.use(express.json());

// Real Data extracted from user input
const menuItems = [
    // SHAKES
    { id: 101, name: 'Vanilla Shake', category: 'Shakes', price: 149, description: 'Classic creamy vanilla indulgence.', image: '/images/menu/vanilla.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 102, name: 'Mango Passion Fruit Shake', category: 'Shakes', price: 199, description: 'Tropical blend of mango and passion fruit.', image: '/images/menu/mango.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 103, name: 'Blueberry Kiwi Shake', category: 'Shakes', price: 199, description: 'Refreshing berry and kiwi mix.', image: '/images/menu/berry.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 104, name: 'Strawberry Shake', category: 'Shakes', price: 199, description: 'Sweet and fresh strawberry blend.', image: '/images/menu/berry.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 105, name: 'Cherry Vanilla Shake', category: 'Shakes', price: 199, description: 'Cherry twist on the classic vanilla.', image: '/images/menu/berry.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 106, name: 'Orange Shake', category: 'Shakes', price: 199, description: 'Zesty orange creamy shake.', image: '/images/menu/mango.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 107, name: 'Butter Scotch Shake', category: 'Shakes', price: 199, description: 'Rich butterscotch flavor.', image: '/images/menu/vanilla.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 108, name: 'Pineapple Shake', category: 'Shakes', price: 199, description: 'Tropical pineapple delight.', image: '/images/menu/mango.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 109, name: 'Banana Shake', category: 'Shakes', price: 199, description: 'Creamy fresh banana.', image: '/images/menu/vanilla.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 110, name: 'Chocolate Oreo Shake', category: 'Shakes', price: 199, description: 'Oreo cookies blended with chocolate.', image: '/images/menu/chocolate.png', tags: ['Veg'] },
    { id: 111, name: 'Chocolate Shake', category: 'Shakes', price: 199, description: 'Decadent rich chocolate.', image: '/images/menu/chocolate.png', tags: ['Veg', 'Gluten-Free'] },

    // MOCKTAILS
    { id: 201, name: 'Iced Black Tea', category: 'Mocktails', price: 149, description: 'Refreshing chilled black tea.', image: '/images/menu/icedtea.png', tags: ['Vegan', 'Gluten-Free'] },
    { id: 202, name: 'Iced Lemon Tea', category: 'Mocktails', price: 149, description: 'Zesty lemon infused ice tea.', image: '/images/menu/icedtea.png', tags: ['Vegan', 'Gluten-Free'] },
    { id: 203, name: 'Iced Peach Tea', category: 'Mocktails', price: 149, description: 'Sweet peach flavored ice tea.', image: '/images/menu/icedtea.png', tags: ['Vegan', 'Gluten-Free'] },
    { id: 204, name: 'Mojito (Mint/Green Apple/Orange/Kiwi)', category: 'Mocktails', price: 149, description: 'Classic refreshing mojito in various flavors.', image: '/images/menu/mojito.png', tags: ['Vegan', 'Gluten-Free'] },
    { id: 205, name: 'Virgin Pinacolada', category: 'Mocktails', price: 149, description: 'Coconut and pineapple tropical blend.', image: '/images/menu/mango.png', tags: ['Vegan', 'Gluten-Free'] },
    { id: 206, name: 'Blood Orange', category: 'Mocktails', price: 149, description: 'Exotic citrus refreshment.', image: '/images/menu/berry.png', tags: ['Vegan', 'Gluten-Free'] },
    { id: 207, name: 'Passion Fruit', category: 'Mocktails', price: 149, description: 'Tangy and sweet passion fruit cooler.', image: '/images/menu/mango.png', tags: ['Vegan', 'Gluten-Free'] },
    { id: 208, name: 'Green Apple Mocktail', category: 'Mocktails', price: 149, description: 'Crisp green apple flavor.', image: '/images/menu/mojito.png', tags: ['Vegan', 'Gluten-Free'] },
    { id: 209, name: 'Cool Blue Mocktail', category: 'Mocktails', price: 149, description: 'Vibrant blue citrus cooler.', image: '/images/menu/mojito.png', tags: ['Vegan', 'Gluten-Free'] },
    { id: 210, name: 'Cranberry Punch', category: 'Mocktails', price: 149, description: 'Tart and sweet cranberry mix.', image: '/images/menu/berry.png', tags: ['Vegan', 'Gluten-Free'] },

    // SOFT BEVERAGES
    { id: 301, name: 'Mineral Water (1 ltr)', category: 'Soft Beverages', price: 20, description: 'Chilled mineral water.', tags: ['Vegan', 'Gluten-Free'] },
    { id: 302, name: 'Cold Drink (750 ml)', category: 'Soft Beverages', price: 15, description: 'Served chilled.', tags: ['Vegan', 'Gluten-Free'] },
    { id: 303, name: 'Soft Drink Can', category: 'Soft Beverages', price: 22, description: 'Assorted flavors.', tags: ['Vegan', 'Gluten-Free'] },
    { id: 304, name: 'Red Bull', category: 'Soft Beverages', price: 125, description: 'Energy drink.', tags: ['Vegan', 'Gluten-Free'] },

    // COOL CHILLERS
    { id: 401, name: 'Signature Cold Coffee', category: 'Cool Chillers', price: 149, description: 'Our house special blend.', image: '/images/menu/chocolate.png', tags: ['Veg', 'Gluten-Free'] },
];

// API Routes
app.get('/api/menu', (req, res) => {
    res.json(menuItems);
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
