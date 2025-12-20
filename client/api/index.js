import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://kaffee-website-client.vercel.app',
    /\.vercel\.app$/
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.some(o => o instanceof RegExp ? o.test(origin) : o === origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));
app.use(express.json());

// Real Data
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

    // HOT COFFEE
    { id: 501, name: 'Cappuccino', category: 'Hot Coffee', price: 149, description: 'Rich espresso with steamed milk foam.', image: '/images/menu/cappuccino.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 502, name: 'Caramel Cappuccino', category: 'Hot Coffee', price: 149, description: 'Cappuccino with sweet caramel notes.', image: '/images/menu/cappuccino.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 503, name: 'Hazelnut Cappuccino', category: 'Hot Coffee', price: 169, description: 'Nutty hazelnut infused cappuccino.', image: '/images/menu/cappuccino.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 504, name: 'Café Americano', category: 'Hot Coffee', price: 169, description: 'Bold espresso with hot water.', image: '/images/menu/cappuccino.png', tags: ['Vegan', 'Gluten-Free'] },
    { id: 505, name: 'Café Latte', category: 'Hot Coffee', price: 169, description: 'Smooth espresso with steamed milk.', image: '/images/menu/cappuccino.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 506, name: 'Café Mocha', category: 'Hot Coffee', price: 189, description: 'Espresso with rich chocolate milk.', image: '/images/menu/cappuccino.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 507, name: 'Café Macchiato', category: 'Hot Coffee', price: 189, description: 'Espresso stained with milk foam.', image: '/images/menu/cappuccino.png', tags: ['Veg', 'Gluten-Free'] },

    // COOL CHILLERS (SHAKES & COLD COFFEE)
    { id: 601, name: 'Iced Latte / Cappuccino', category: 'Cool Chillers', price: 229, description: 'Chilled coffee classics on ice.', image: '/images/menu/cold_coffee.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 602, name: 'Coffee Frappuccina', category: 'Cool Chillers', price: 229, description: 'Blended ice coffee with whipped cream.', image: '/images/menu/cold_coffee.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 603, name: 'Caramel Frappuccina', category: 'Cool Chillers', price: 229, description: 'Flavored frappuccina delight.', image: '/images/menu/cold_coffee.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 604, name: 'Choco Frappe', category: 'Cool Chillers', price: 229, description: 'Chocolatey blended ice coffee.', image: '/images/menu/cold_coffee.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 605, name: 'Irish Cold Coffee', category: 'Cool Chillers', price: 229, description: 'Cold coffee with Irish cream flavor.', image: '/images/menu/cold_coffee.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 606, name: "Devil's Own", category: 'Cool Chillers', price: 259, description: 'Rich dark chocolate cold coffee.', image: '/images/menu/cold_coffee.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 607, name: 'Cold Coffee', category: 'Cool Chillers', price: 229, description: 'Classic chilled coffee.', image: '/images/menu/cold_coffee.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 608, name: 'Strawberry Blend', category: 'Cool Chillers', price: 229, description: 'Strawberry infused cold blend.', image: '/images/menu/berry.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 611, name: 'Desi Milk Thandai', category: 'Cool Chillers', price: 149, description: 'Traditional spiced milk drink.', image: '/images/menu/vanilla.png', tags: ['Veg', 'Gluten-Free'] },

    // CHINESE CULINARIES
    { id: 1001, name: 'Hakka Noodles', category: 'Chinese', price: 199, description: 'Classic wok-tossed noodles with veggies.', image: '/images/menu/dimsum.png', tags: ['Veg', 'Vegan'] },
    { id: 1002, name: 'Chilli Garlic Noodles', category: 'Chinese', price: 219, description: 'Spicy noodles with garlic kick.', image: '/images/menu/dimsum.png', tags: ['Veg', 'Vegan'] },
    { id: 1003, name: 'Singapore Noodles', category: 'Chinese', price: 219, description: 'Curry flavored thin noodles.', image: '/images/menu/dimsum.png', tags: ['Veg'] },
    { id: 1004, name: 'Veg Manchurian Gravy', category: 'Chinese', price: 269, description: 'Veggie balls in soy-ginger sauce.', image: '/images/menu/dimsum.png', tags: ['Veg', 'Vegan'] },
    { id: 1005, name: 'Chilli Paneer Gravy', category: 'Chinese', price: 299, description: 'Cottage cheese in spicy chilli sauce.', image: '/images/menu/dimsum.png', tags: ['Veg'] },
    { id: 1006, name: 'Veg Fried Rice', category: 'Chinese', price: 199, description: 'Wok-tossed aromatic rice with veggies.', image: '/images/menu/dimsum.png', tags: ['Veg', 'Vegan'] },
    { id: 1007, name: 'Dimsums (Veg/Corn)', category: 'Chinese', price: 149, description: 'Steamed dumplings (8 Pcs).', image: '/images/menu/dimsum.png', tags: ['Veg'] },
    { id: 1008, name: 'Dimsums (Chicken)', category: 'Chinese', price: 229, description: 'Steamed chicken dumplings (8 Pcs).', image: '/images/menu/dimsum.png', tags: ['Non-Veg'] },

    // SALADS
    { id: 1101, name: 'Classic Caesar Salad', category: 'Salads', price: 299, description: 'Lettuce, croutons, parmesan, caesar dressing.', image: '/images/menu/salad.png', tags: ['Veg'] },
    { id: 1102, name: 'Caprese Salad', category: 'Salads', price: 299, description: 'Fresh mozzarella, tomatoes, basil pesto.', image: '/images/menu/salad.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 1103, name: 'Nicoise Salad', category: 'Salads', price: 299, description: 'French salad with potatoes, beans, olives.', image: '/images/menu/salad.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 1104, name: 'Warm Chicken Salad', category: 'Salads', price: 349, description: 'Grilled chicken breast on fresh greens.', image: '/images/menu/salad.png', tags: ['Non-Veg', 'Gluten-Free'] },
    { id: 1105, name: 'Peri Peri Salad', category: 'Salads', price: 299, description: 'Spicy peri peri dressing with peppers.', image: '/images/menu/salad.png', tags: ['Veg', 'Gluten-Free'] },

    // ENGLISH BREAKFAST
    { id: 1201, name: 'Poached Egg', category: 'Breakfast', price: 199, description: 'Two poached eggs on toast.', image: '/images/menu/breakfast.png', tags: ['Non-Veg'] },
    { id: 1202, name: 'Scrambled Egg', category: 'Breakfast', price: 249, description: 'Creamy scrambled eggs with toast.', image: '/images/menu/breakfast.png', tags: ['Non-Veg'] },
    { id: 1203, name: 'Fried Egg (Single)', category: 'Breakfast', price: 239, description: 'Sunny side up or overcast.', image: '/images/menu/breakfast.png', tags: ['Non-Veg'] },
    { id: 1204, name: 'French Toast', category: 'Breakfast', price: 219, description: 'Sweet cinnamon infused toast.', image: '/images/menu/breakfast.png', tags: ['Non-Veg'] },
    { id: 1205, name: 'Toast with Preserves', category: 'Breakfast', price: 199, description: 'Toast with jam, butter and beans.', image: '/images/menu/breakfast.png', tags: ['Veg'] },

    // PIZZA DELIGHTS
    { id: 1301, name: 'Queen Margherita', category: 'Pizza', price: 399, description: 'San Marzano tomato sauce, fresh mozzarella, basil.', image: '/images/menu/pizza.png', tags: ['Veg'] },
    { id: 1302, name: 'Exotic Veg', category: 'Pizza', price: 449, description: 'Pimentos, broccoli, mushrooms, olives.', image: '/images/menu/pizza.png', tags: ['Veg'] },
    { id: 1303, name: 'Peri Peri Paneer', category: 'Pizza', price: 499, description: 'Spicy paneer chunks with paprika.', image: '/images/menu/pizza.png', tags: ['Veg'] },
    { id: 1304, name: 'Pizza Quattro Formaggi', category: 'Pizza', price: 549, description: 'Four cheese delight: Cheddar, Bocconcini, Mozzarella.', image: '/images/menu/pizza.png', tags: ['Veg'] },
    { id: 1305, name: 'Farmhouse Pizza', category: 'Pizza', price: 399, description: 'Onion, capsicum, mushroom, tomato.', image: '/images/menu/pizza.png', tags: ['Veg'] },
    { id: 1306, name: 'BBQ Chicken Pizza', category: 'Pizza', price: 549, description: 'BBQ sauce, roasted chicken, caramelized onions.', image: '/images/menu/pizza.png', tags: ['Non-Veg'] },
    { id: 1307, name: 'Pepperoni Pizza', category: 'Pizza', price: 549, description: 'Classic pepperoni and mozzarella.', image: '/images/menu/pizza.png', tags: ['Non-Veg'] },

    // PASTAS
    { id: 1401, name: 'Arrabiata Red Sauce', category: 'Pasta', price: 299, description: 'Spicy tomato garlic sauce with basil.', image: '/images/menu/pasta.png', tags: ['Veg', 'Vegan'] },
    { id: 1402, name: 'Alfredo White Sauce', category: 'Pasta', price: 349, description: 'Creamy parmesan cheese sauce.', image: '/images/menu/pasta.png', tags: ['Veg'] },
    { id: 1403, name: 'Pink Sauce Pasta', category: 'Pasta', price: 349, description: 'Best of both worlds: creamy tomato.', image: '/images/menu/pasta.png', tags: ['Veg'] },
    { id: 1404, name: 'Aglio Olio', category: 'Pasta', price: 349, description: 'Olive oil, garlic, chilli flakes.', image: '/images/menu/pasta.png', tags: ['Veg', 'Vegan'] },

    // BURGERS & SANDWICHES
    { id: 1501, name: 'Grilled Veg Sandwich', category: 'Sandwiches', price: 199, description: 'Seasonal grilled vegetables with cocktail sauce.', image: '/images/menu/burger.png', tags: ['Veg'] },
    { id: 1502, name: 'Chicken BBQ Sandwich', category: 'Sandwiches', price: 249, description: 'Grilled chicken breast in BBQ sauce.', image: '/images/menu/burger.png', tags: ['Non-Veg'] },
    { id: 1503, name: 'Veg Mint Mayo Burger', category: 'Sandwiches', price: 149, description: 'Veg patty with mint mayo.', image: '/images/menu/burger.png', tags: ['Veg'] },
    { id: 1504, name: 'Juicy Lucy Chicken', category: 'Sandwiches', price: 249, description: 'Chicken patty stuffed with cheese.', image: '/images/menu/burger.png', tags: ['Non-Veg'] },
    { id: 1505, name: 'Grilled Chicken Wrap', category: 'Sandwiches', price: 249, description: 'Grilled chicken strips with salad wrap.', image: '/images/menu/burger.png', tags: ['Non-Veg'] },

    // DESSERTS
    { id: 701, name: 'Brownie Sundae', category: 'Desserts', price: 249, description: 'Warm brownie with ice cream and nuts.', image: '/images/menu/brownie.png', tags: ['Veg'] },
    { id: 702, name: 'Choco Lava', category: 'Desserts', price: 199, description: 'Molten chocolate cake.', image: '/images/menu/brownie.png', tags: ['Veg'] },
    { id: 703, name: ' Kesariya Phirni', category: 'Desserts', price: 149, description: 'Saffron rice pudding.', image: '/images/menu/vanilla.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 704, name: 'Hot Chocolate', category: 'Desserts', price: 199, description: 'Rich hot cocoa.', image: '/images/menu/chocolate.png', tags: ['Veg', 'Gluten-Free'] },
    { id: 705, name: 'Oreo Cookie & Fudge Brownie', category: 'Desserts', price: 259, description: 'Decadent oreo fudge brownie.', image: '/images/menu/brownie.png', tags: ['Veg'] },
    { id: 706, name: 'Ice-Cream (Per Scoop)', category: 'Desserts', price: 109, description: 'Choice of vanilla, chocolate, or strawberry.', image: '/images/menu/vanilla.png', tags: ['Veg', 'Gluten-Free'] },

    // SIZZLERS
    { id: 801, name: 'Oriental Sizzler', category: 'Sizzlers', price: 349, description: 'Hot sizzling platter with exotic veggies/paneer.', image: '/images/menu/sizzler.png', tags: ['Veg'] },
    { id: 802, name: 'Continental Sizzler', category: 'Sizzlers', price: 399, description: 'Sizzling platter with creamy european sauces.', image: '/images/menu/sizzler.png', tags: ['Veg'] },

    // PARTY PACKAGES (Display purpose)
    { id: 901, name: 'Value Party Package (Sat/Sun)', category: 'Events', price: 1350, description: 'Unlimited Party Package (12+ Diners).', image: '/images/menu/sizzler.png', tags: ['Group'] },
    { id: 902, name: 'Kitty Party Menu', category: 'Events', price: 499, description: 'Special menu for kitty parties (Min 6).', image: '/images/menu/sizzler.png', tags: ['Group'] },
];

// API Routes
app.get('/api/menu', (req, res) => {
    res.json(menuItems);
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

app.get('/api', (req, res) => {
    res.send('API running');
});

// Export the app for Vercel
export default app;

// Only listen if run directly
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}
