import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import './ProductCard.css';

const ProductCard = ({ plant }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const isInCart = cartItems.some(item => item.id === plant.id);

    const handleAddToCart = () => {
        dispatch(addToCart(plant));
    };

    return (
        <div className="product-card card">
            <div className="product-image-wrapper">
                <img src={plant.image} alt={plant.name} className="product-image" />
            </div>
            <div className="product-info">
                <h3 className="product-name">{plant.name}</h3>
                <p className="product-description">{plant.description}</p>
                <div className="product-footer">
                    <span className="product-price">${plant.price.toFixed(2)}</span>
                    <button
                        className={`btn btn-primary product-btn ${isInCart ? 'added' : ''}`}
                        onClick={handleAddToCart}
                        disabled={isInCart}
                    >
                        {isInCart ? (
                            <>
                                <span>✓</span>
                                <span>Added</span>
                            </>
                        ) : (
                            <>
                                <span>🛒</span>
                                <span>Add to Cart</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
