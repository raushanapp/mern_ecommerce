import React, { useState } from 'react'
import style from "./home.module.css";
import List from "../list/List";
function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  return (
    <div className={style.container}>
      {/* {!error && <List products={products ? products : []} />}
      {error&& <h1>Server is not responding</h1>} */}
    </div>
  )
}

export default Home