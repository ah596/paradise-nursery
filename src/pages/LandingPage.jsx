import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content container">
                    <h1 className="hero-title fade-in">Paradise Nursery</h1>
                    <p className="hero-subtitle slide-in-left">
                        Discover the perfect houseplants to transform your living space.
                        We offer premium quality plants that bring life, beauty, and fresh air to your home.
                    </p>
                    <p className="hero-description slide-in-right">
                        From low-light champions to air-purifying powerhouses, our carefully curated
                        collection features healthy, vibrant plants that are perfect for both beginners
                        and experienced plant parents. Each plant comes with care instructions to help
                        you create your own indoor jungle.
                    </p>
                    <Link to="/products" className="btn btn-primary hero-btn scale-in">
                        Get Started
                        <span className="btn-arrow">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
