import React from 'react'
import style from "./checkout.module.css";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
function Checkout() {
  const { address } = useSelector((state) => state.address);
  const { products } = useSelector((state) => state.cart);
  // console.log(Object.entries(address))
  function totalPriceProducts() {
    let totalPrice = 0;
    products.map((product) => totalPrice += (product.price * product.quantity));
    return totalPrice.toFixed(2); 
  }
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.left}>
          <h1 className={style.leftTitle}>Address Data</h1>
          <div className={style.addressData}>
            {Object.entries(address).map(([key, value]) => (
              <div key={key} className={style.info}>
                <h3>{key}: </h3>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={style.right}>
          <h1 className={style.rightTitle}>Products</h1>
          <div className={style.products}>
            {products.map((product) => (
              <div key={product.id} className={style.product}>
                <Link to= { `/productDetail/${product.id}`}  >
                  <img src={`http://localhost:3001/images/${product.mainImg}`} alt="" className={style.img} />
                </Link>
                <div className={style.priceAndTitle}>
                  <p className={style.productTitle}>{product.title}</p>
                  <span className={style.price}>
                    {product.quantity} X <span>$</span> {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <span className={style.totalPriceMsg}>
            Total Price of Products:
            <div className={style.totalPrice}>
              ${totalPriceProducts()}
            </div>
          </span>
        </div>
        <Link to='/final' className={style.orderBtn}>
          Order
        </Link>
      </div>
    </div>
  )
}

export default Checkout