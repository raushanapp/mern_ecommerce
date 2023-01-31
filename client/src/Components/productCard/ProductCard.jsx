import React from 'react'
import style from "./productCard.module.css";
import { Link } from "react-router-dom";
function ProductCard({item}) {
  return (
    <div className={style.container}>
      <Link to={`/productDetails/${item._id}`} className={style.wrapper} >
        <img
          src={`http://localhost:3001/images/${item.firstImg}`}
          alt={item.title}
          className={style.productImg}
        />
        <div className={style.productInfo}>
          <h2 className={style.productTitle}>{item.title}</h2>
          <span className={style.productPrice}><span>$</span>{Number(item.price).toFixed(2)}</span>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard