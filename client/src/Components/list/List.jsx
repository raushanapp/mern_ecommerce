import React from 'react'
import style from "./list.module.css";
import ProductCard from '../productCard/ProductCard';
function List({ products = [] }) {
  console.log(products)
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {products?.length > 0 && <h1 className={style.title}>Best product on the market</h1>}
        <div className={style.productContainer}>
          {products?.length === 0 ? (
            <h1 className={style.noProductMsg}>No product yet!</h1>
          ) : products?.map((product) => (
            <ProductCard key={product._id} item={product} />
          ))}
        </div>
    </div>
    </div>
  )
}

export default List