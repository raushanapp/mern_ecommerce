import React, { useState } from 'react'
import style from "./home.module.css";
import List from "../list/List";
import { useEffect } from 'react';
function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const fetchProducts = async() => {
    try {
      const resp = await fetch(`http://localhost:3001/products/`);
      const data = await resp.json();
      setProducts(data.products);
    } catch (error) {
      setError(prev => error.message);
      console.log(error.message);
    }
  }

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
     }
  },[])
  return (
    <div className={style.container}>
      {!error && <List products={products ? products : []} />}
      {error&& <h1>Server is not responding</h1>}
    </div>
  )
}

export default Home