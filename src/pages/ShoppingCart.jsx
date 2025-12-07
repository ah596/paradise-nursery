import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import './ShoppingCart.css';

const ShoppingCart = () => {
    const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

    const handleCheckout = () => {
        alert('Coming Soon! Checkout functionality will be available soon.');
    };

    return (
        <>
            <Header />
            <div className="shopping-cart">
                <div className="container">
                    <div className="page-header fade-in">
                        <h1>Shopping Cart</h1>
                        {totalQuantity > 0 && (
                            <p className="page-subtitle">
                                You have {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'} in your cart
                            </p>
                        )}
                    </div>

                    {items.length === 0 ? (
                        <div className="empty-cart scale-in">
                            <div className="empty-cart-icon">🛒</div>
                            <h2>Your cart is empty</h2>
                            <p>Add some beautiful plants to get started!</p>
                            <Link to="/products" className="btn btn-primary">
                                Browse Plants
                            </Link>
                        </div>
                    ) : (
                        <div className="cart-content">
                            <div className="cart-items">
                                {items.map(item => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </div>

                            <div className="cart-summary card glass">
                                <h2 className="summary-title">Order Summary</h2>

                                <div className="summary-row">
                                    <span>Total Items:</span>
                                    <strong>{totalQuantity}</strong>
                                </div>

                                <div className="summary-row total-row">
                                    <span>Total Cost:</span>
                                    <strong className="total-amount">${totalAmount.toFixed(2)}</strong>
                                </div>

                                <div className="cart-actions">
                                    <button
                                        className="btn btn-primary checkout-btn"
                                        onClick={handleCheckout}
                                    >
                                        Checkout
                                    </button>
                                    <Link
                                        to="/products"
                                        className="btn btn-secondary"
                                    >
                                        Continue Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;
