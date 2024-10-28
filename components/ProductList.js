import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/ProductList.module.css';

const products = [
    { id: 1, name: "I'm a product", price: "$15.00", inStock: true, image: "/product1.jpg", sku: "0001", bestSeller: false },
    { id: 2, name: "I'm a product", price: "$15.00", inStock: false, image: "/product2.jpg", sku: "0002", bestSeller: false },
    { id: 3, name: "I'm a product", price: "$15.00", inStock: true, image: "/product3.jpg", sku: "0003", bestSeller: false },
    { id: 4, name: "I'm a product", price: "$15.00", inStock: false, image: "/product4.jpg", sku: "0004", bestSeller: true },
    { id: 5, name: "I'm a product", price: "$15.00", inStock: true, image: "/product5.jpg", sku: "0005", bestSeller: true },
  ];

const ProductList = () => {
    const router = useRouter();

    const handleProductClick = (id) => {
        router.push(`/products/${id}`);

    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>NEW DROPS</h1>
            <div className={styles.productGrid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.productCard} onClick={() => handleProductClick(product.id)}>
                        <img src={product.image} alt={product.name} className={styles.productImage} />
                        <h2 className={styles.productName}>{product.name}</h2>
                        <p className={styles.productPrice}>{product.price}</p>
                        {product.bestSeller && <span className={styles.bestSeller}>Best Seller</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ProductList;
