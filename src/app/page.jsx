'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { productsData } from '../data/products.js';
import ProductCard from '../components/ProductCard/ProductCard.jsx';
import styles from './page.module.css';
import Header from '../components/Header/Header.jsx';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  useEffect(() => {
    setProductCount(products.length);
  }, [products]);


  return (
    <main className={styles.main}>
      <Header />

      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard 
          key={product.id} 
          image={product.image}
          title={product.title} 
          price={product.price} 
          description={product.description} 
          rating={product.rating} />
        ))}
      </div>
      </main>
  );
}
