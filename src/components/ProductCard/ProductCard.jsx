import React from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ title, price, description, image, rating }) {
  const titleExibido = title ? title : "Produto sem nome";
  const precoExibido = price ? price : "Preço indisponível";
  const descricaoExibida = description ? description : "Descrição não disponível";
  
  const avaliacaoExibida = rating ? rating.count : "Sem avaliações";
  
  return (
    <div className={styles.card}>
      <img src={image} alt={titleExibido} className={styles.image} />
      <h2 className={styles.name}>{titleExibido}</h2>
      <p className={styles.price}>{precoExibido}</p>
      <p className={styles.description}>{descricaoExibida}</p>
      <div className={styles.rating}>
        <span>{rating && rating.stars ? '⭐'.repeat(rating.stars) : ''}</span>
        <span>({avaliacaoExibida})</span>
        <span className={styles.reviews}>{rating && rating.reviews ? rating.reviews : 0} avaliações</span>
        </div>
      </div>
  );
}
