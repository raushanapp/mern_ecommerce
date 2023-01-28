import React from 'react'
import style from "./navbar.module.css";
import { Link } from "react-router-dom"
import {AiOutlineShoppingCart} from "react-icons/ai"
function Navbar() {
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
          <span className={style.username}>Test</span> 
          <span className={style.logoutBtn}>Logout</span>
          <div className={style.cartContainer}>
            <AiOutlineShoppingCart />
            <span className={style.cartCount}>0</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar