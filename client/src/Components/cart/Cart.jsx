import React from 'react';
import style from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from 'react-icons/bs';
import{CiCircleRemove} from "react-icons/ci"
import { emptyCart, removeProduct, toggleShowCart } from '../../redux/cartSlice';
function Cart() {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let total = 0;
   
  products?.length > 0 && products.map((product) => total += (Number(product.quantity) * Number(product.price)));
  
  const removeFromCart = (id) => {
    dispatch(removeProduct({id}))
  }
  const handleCloseCart = () => {
    dispatch(emptyCart())
  };
  const resetCart = () => {
    dispatch(toggleShowCart());
  }
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {total > 0 && <h2 className={style.title}>Cart Items</h2>}
        <div className={style.cartItems}>
          {products?.length === 0 ? (
            <h1 className={style.noProducts} >No products yet in the cart</h1>
          ) : (
              products?.length > 0 && products?.map((product) => (
                <div key={product.id} className={style.cartitem}>
                  <Link to={`/productDetails/${product.id}`} >
                    <img
                      src={`http://localhost:3001/images/${product?.mainImg}`}
                      alt=""
                    className={style.img}
                    />
                  </Link>
                  <div className={style.priceAddTitle4}>
                    <p className={style.productTitle}>{product?.title}</p>
                    <span className={style.productPrice}>
                      {product.quantity} X <span>$</span> {product?.price}
                    </span>
                  </div>
                  <BsFillTrashFill
                    className={style.trashIcon}
                    onClick={()=>removeFromCart(product.id)}
                  />
                </div>
              ))
          )}
        </div>
        {total > 0 && (
          <div
            className={style.resetCart}
            onClick={resetCart}
          >
            Reset Cart
          </div>
        )}
        <CiCircleRemove
          onClick={handleCloseCart}
          className={style.removeIcon}
        />
      </div>
    </div>
  )
}

export default Cart