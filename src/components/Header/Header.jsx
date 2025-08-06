import React from "react";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import { productsData } from "../../data/products.js";

export default function Header() {
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  useEffect(() => {
    setProductCount(products.length);
  }, [products]);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>🛒 Loja de Eletrônicos</h1>
      <p>Os melhores produtos com os melhores preços!</p>
      <p>📊 Total de produtos: <span>{productCount}</span></p>
    </header>
  );
}
