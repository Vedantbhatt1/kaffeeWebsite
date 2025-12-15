import React from 'react';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';
import { FaTimes, FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

const CartDrawer = () => {
    const {
        cart,
        isCartOpen,
        setIsCartOpen,
        removeFromCart,
        updateQuantity,
        cartTotal,
        clearCart
    } = useCart();

    if (!isCartOpen) return null;

    return (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
            <div className="cart-drawer" onClick={e => e.stopPropagation()}>
                <div className="cart-header">
                    <h2>Your Order</h2>
                    <button className="close-btn" onClick={() => setIsCartOpen(false)}>
                        <FaTimes />
                    </button>
                </div>

                {cart.length === 0 ? (
                    <div className="empty-cart">
                        <p>Your cart is empty.</p>
                        <p>Add some delicious treats!</p>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="item-info">
                                        <h4>{item.name}</h4>
                                        <p>₹{item.price}</p>
                                    </div>
                                    <div className="item-controls">
                                        <div className="quantity-controls">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                                <FaMinus size={10} />
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                                <FaPlus size={10} />
                                            </button>
                                        </div>
                                        <button
                                            className="remove-btn"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-footer">
                            <div className="total-row">
                                <span>Total:</span>
                                <span>₹{cartTotal}</span>
                            </div>
                            <button className="checkout-btn" onClick={() => alert('Checkout functionality coming soon!')}>
                                Proceed to Checkout
                            </button>
                            <button className="clear-btn" onClick={clearCart}>
                                Clear Cart
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
