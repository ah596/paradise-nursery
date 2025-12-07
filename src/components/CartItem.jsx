import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../store/cartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementQuantity(item.id));
    };

    const handleDecrement = () => {
        dispatch(decrementQuantity(item.id));
    };

    const handleRemove = () => {
        dispatch(removeFromCart(item.id));
    };

    const subtotal = (item.price * item.quantity).toFixed(2);

    return (
        <div className="cart-item card">
            <div className="cart-item-image-wrapper">
                <img src={item.image} alt={item.name} className="cart-item-image" />
            </div>

            <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">Unit Price: ${item.price.toFixed(2)}</p>
            </div>

            <div className="cart-item-controls">
                <div className="quantity-controls">
                    <button
                        className="quantity-btn"
                        onClick={handleDecrement}
                        aria-label="Decrease quantity"
                    >
                        −
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                        className="quantity-btn"
                        onClick={handleIncrement}
                        aria-label="Increase quantity"
                    >
                        +
                    </button>
                </div>

                <p className="cart-item-subtotal">
                    Subtotal: <strong>${subtotal}</strong>
                </p>

                <button
                    className="delete-btn"
                    onClick={handleRemove}
                    aria-label="Remove item"
                >
                    🗑️ Delete
                </button>
            </div>
        </div>
    );
};

export default CartItem;
