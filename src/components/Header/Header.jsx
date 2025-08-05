import styles from "./Header.module.css";
import React from "react";
import { useState, useEffect } from "react";

export default function Header() {
    const [productcount, setProductCount] = useState(0);
    


    return (
        <header className={styles.header}>
            <h1 className={styles.title}>🛒 Loja de Eletrônicos</h1>
            <p>Os melhores produtos com os melhores preços!</p>
            <p>📊 Total de produtos: <span>{productcount}</span></p>
