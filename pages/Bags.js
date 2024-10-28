import React from 'react';
import products from '@/data/products';
import { useRouter } from 'next/router';
import Header from '@/pages/header';
import Footer from '../components/footer';
import styles from '../styles/Allproduct.module.css';

const Bags = () => {
    const router = useRouter();
   
    const handleProductClick = (id) => {
        router.push(`/products/${id}`);
    };

    // Filter only Sarees
    const bags = products.filter((product) => product.category === 'Bags');

    return (
        <div className={styles.container}>
            <Header />

            <h1 className={styles.title}>SAREES COLLECTION</h1>

            <div className={styles.productGrid}style={{marginTop:"10%"}} >
                {bags.map((product) => (
                    <div key={product.id} className={styles.productCard} onClick={() => handleProductClick(product.id)}>
                        <img src={product.image} alt={product.name} className={styles.productImage} />
                        <h2 className={styles.productName}>{product.price}</h2>
                        <p>{product.name}</p>
                        <p className={styles.productPrice}> <b >🛒 Buy Now</b> </p>
                        {product.bestSeller && <span className={styles.bestSeller}>Best Seller</span>}
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default Bags;
