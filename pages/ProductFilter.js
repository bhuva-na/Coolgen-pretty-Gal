// components/ProductFilter.js

import { useState } from 'react';

const ProductFilter = ({ products, onFilterChange }) => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    // Extract unique colors from the products data
    const colors = Array.from(new Set(products.map((product) => product.color)));
    const sareeSubCategories = ["Cotton Saree", "Silk Saree", "Georgette Saree"];
    const kurtiSubCategories = ["Western Kurti", "Traditional Kurti", "Designer Kurti"];
    
    // Assuming `productType` is dynamic based on user selection or page
    const productType = "saree"; // For sarees, or dynamically pass this value as a prop
    const subCategories = productType === "saree" ? sareeSubCategories : kurtiSubCategories;

    const handleColorChange = (color) => {
        setSelectedColor(color);
        onFilterChange({ color, priceRange: selectedPriceRange, subCategory: selectedSubCategory });
    };

    const handlePriceRangeChange = (min, max) => {
        setSelectedPriceRange([min, max]);
        onFilterChange({ color: selectedColor, priceRange: [min, max], subCategory: selectedSubCategory });
    };

    const handleSubCategoryChange = (category) => {
        setSelectedSubCategory(category);
        onFilterChange({ color: selectedColor, priceRange: selectedPriceRange, subCategory: category });
    };

    return (
        <div>
            {/* Color Filter */}
            <div style={{marginTop:"15%"}}>
                <label>Color:</label>
                {colors.map((color) => (
                    <button 
                        key={color} 
                        onClick={() => handleColorChange(color)}
                        style={{
                            border: selectedColor === color ? '2px solid #ff1744' : '1px solid #ccc',
                            padding: '5px 10px',
                            margin: '5px',
                        }}
                    >
                        {color}
                    </button>
                ))}
            </div>

            {/* Price Range Filter */}
            <div>
                <label>Price Range:</label>
                <input
                    type="number"
                    placeholder="Min Price"
                    onChange={(e) => handlePriceRangeChange(e.target.value, selectedPriceRange[1])}
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    onChange={(e) => handlePriceRangeChange(selectedPriceRange[0], e.target.value)}
                />
            </div>

            {/* Subcategory Filter */}
            <div>
                <label>Subcategory:</label>
                {subCategories.map((category) => (
                    <button 
                        key={category} 
                        onClick={() => handleSubCategoryChange(category)}
                        style={{
                            border: selectedSubCategory === category ? '2px solid #ff1744' : '1px solid #ccc',
                            padding: '5px 10px',
                            margin: '5px',
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductFilter;
