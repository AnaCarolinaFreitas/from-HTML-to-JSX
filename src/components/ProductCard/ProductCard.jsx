import React from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h2 className={styles.name}>{product.title}</h2>
      <p className={styles.price}>{product.price}</p>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.rating}>
        <span>{'⭐'.repeat(product.rating.stars)}</span>
        <span>({product.rating.count})</span>
        <span className={styles.reviews}>{product.rating.reviews} avaliações</span>
        </div>
      </div>
  );
}
