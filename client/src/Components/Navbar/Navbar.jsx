import React from 'react'
import style from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { login,logout } from '../../redux/authSlice';
import { toggleShowCart } from '../../redux/cartSlice';
import Cart from '../cart/Cart';
function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showCart, products } = useSelector((state) => state.cart);
  const {user}  = useSelector((state) => state.auth);
  console.log("user navbar...", user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleToggleCart = () => {
    dispatch(toggleShowCart());
  }
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Link to='/' className={style.left}>
          <h1 className={style.title}>E-Commerce</h1>
        </Link>
        <div className={style.right}>
        <Link to='/create' className={style.left}>
          Create
        </Link>
          <span className={style.username1}>{user?.username}</span> 
          <span className={style.logoutBtn}onClick={handleLogout} >Logout</span>
          <div className={style.cartContainer} onClick={handleToggleCart} >
            <AiOutlineShoppingCart />
            <span className={style.cartCount}>{ products?.length||0}</span>
          </div>
        </div>
        {showCart && <Cart />}
      </div>
    </div>
  )
}

export default Navbar