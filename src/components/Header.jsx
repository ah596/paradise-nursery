import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const location = useLocation();

    return (
        <header className="header glass">
            <div className="container header-content">
                <Link to="/" className="logo">
                    <span className="logo-icon">🌿</span>
                    <span className="logo-text">Paradise Nursery</span>
                </Link>

                <nav className="nav">
                    <Link
                        to="/products"
                        className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}
                    >
                        Products
                    </Link>
                    <Link
                        to="/cart"
                        className={`nav-link cart-link ${location.pathname === '/cart' ? 'active' : ''}`}
                    >
                        <span className="cart-icon">🛒</span>
                        {totalQuantity > 0 && (
                            <span className="cart-badge">{totalQuantity}</span>
                        )}
                        <span className="cart-text">Cart</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
