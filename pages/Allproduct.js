import React, { useState } from 'react';
import products from '@/data/products';
import { useRouter } from 'next/router';
import Header from '@/pages/header';
import Footer from '../components/footer';
import styles from '../styles/Allproduct.module.css';

const AllProducts = () => {
    const router = useRouter();

    // State for selected category, color, and price range
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedColor, setSelectedColor] = useState('All');
    const [priceRange, setPriceRange] = useState([0, 5000]); // Default price range from 0 to 5000

    // Handle product click to navigate to detail page
    const handleProductClick = (id) => {
        router.push(`/products/${id}`);
    };

    // Filter products based on category, color, and price range
    const filteredProducts = products.filter((product) => {
        // Filter by category
        const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;

        // Filter by color
        const colorMatch = selectedColor === 'All' || product.color.toLowerCase() === selectedColor.toLowerCase();

        // Filter by price range
        const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];

        return categoryMatch && colorMatch && priceMatch;
    });

    return (
        <div className={styles.container}>
            <Header />

            <h1 className={styles.title}>NEW DROPS</h1>

            {/* Horizontal Navbar Filter */}
            <div className={styles.filterNavbar} style={{marginTop:"6%"}}>
                {/* Category Filter */}
                <div className={styles.categoryFilter}>
                    <button onClick={() => setSelectedCategory('All')} className={selectedCategory === 'All' ? styles.active : ''}>All</button>
                    <button onClick={() => setSelectedCategory('Sarees')} className={selectedCategory === 'Sarees' ? styles.active : ''}>Sarees</button>
                    <button onClick={() => setSelectedCategory('Kurtis')} className={selectedCategory === 'Kurtis' ? styles.active : ''}>Kurtis</button>
                    <button onClick={() => setSelectedCategory('Bags')} className={selectedCategory === 'Bags' ? styles.active : ''}>Bags</button>
                    <button onClick={() => setSelectedCategory('Ornaments')} className={selectedCategory === 'Ornaments' ? styles.active : ''}>Jewellery</button>
                </div>

                {/* Color Filter */}
                <div className={styles.colorFilter}>
                    <label>Color:</label>
                    <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                        <option value="All">All Colors</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Black">Black</option>
                        <option value="Gold">Gold</option>
                        {/* Add more color options as needed */}
                    </select>
                </div>

                {/* Price Range Filter */}
                <div className={styles.priceRangeFilter}>
                    <label>Price:</label>
                    <input 
                        type="range" 
                        min="0" 
                        max="5000" 
                        step="100" 
                        value={priceRange[1]} 
                        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    />
                    <span>Up to ₹{priceRange[1]}</span>
                </div>
            </div>

            {/* Product Grid */}
            <div className={styles.productGrid}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className={styles.productCard} onClick={() => handleProductClick(product.id)}>
                            <img src={product.image} alt={product.name} className={styles.productImage} />
                            <h2 className={styles.productPrice}>₹{product.price}</h2>
                            <p className={styles.productName}>{product.name}</p>
                            <p className={styles.productBuyNow}><b>🛒 Buy Now</b></p>
                            {product.bestSeller && <span className={styles.bestSeller}>Best Seller</span>}
                        </div>
                    ))
                ) : (
                    <p>No products found matching the selected filters.</p>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default AllProducts;
