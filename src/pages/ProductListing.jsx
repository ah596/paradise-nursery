import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { plantsData, categories } from '../data/plantsData';
import './ProductListing.css';

const ProductListing = () => {
    const getPlantsByCategory = (category) => {
        return plantsData.filter(plant => plant.category === category);
    };

    return (
        <>
            <Header />
            <div className="product-listing">
                <div className="container">
                    <div className="page-header fade-in">
                        <h1>Our Plant Collection</h1>
                        <p className="page-subtitle">
                            Explore our carefully curated selection of premium houseplants
                        </p>
                    </div>

                    {categories.map((category, index) => (
                        <section key={category} className="category-section" style={{ animationDelay: `${index * 0.1}s` }}>
                            <h2 className="category-title">{category} Plants</h2>
                            <div className="products-grid">
                                {getPlantsByCategory(category).map(plant => (
                                    <ProductCard key={plant.id} plant={plant} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductListing;
