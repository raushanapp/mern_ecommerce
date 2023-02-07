import React, { useState,useEffect } from 'react'
import style from "./productDetails.module.css";
import numToStars from '../../helpers/numToStars';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { AiFillHeart } from 'react-icons/ai';
import { addProduct } from '../../redux/cartSlice';
function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [currentImage, setCuurentImage] = useState('');
  const [quantityProduct, setQuantityProduct] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products } = useSelector((state) => state.cart);

  console.log(products)
   const fetchSingleProduct = async () => {
    try {
      const res = await fetch(`http://localhost:3001/products/${id}`);
      const data = await res.json();
      setProduct(data.product);
      setCuurentImage(data.product.firstImg);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  const addQuantity = () => {
    setQuantityProduct(prev => prev + 1);
  };
  const removeQuantity = () => {
    setQuantityProduct(prev => prev === 1 ? 1 : prev - 1);
  };

  const addProductToCart = () => {
    dispatch(addProduct({
      quantity: quantityProduct,
      title: product?.title,
      description: product?.description,
      price: product?.price,
      id: product?._id,
      mainImg:product?.firstImg
    }))
    setQuantityProduct(pre => 1);
  }
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.left}>
          <div className={style.mainImgContainer}>
            <img
              src={`http://localhost:3001/images/${currentImage}`}
              className={style.mainImg}
              alt=''
            />
          </div>
        </div>
        <div className={style.right}>
          <h2 className={style.title}>{product?.title}</h2>
          <p className={style.desc}>{product?.description}</p>
          <h2 className={style.price}>
            <span>$</span>{product?.price}
          </h2>
          <div className={style.quantity}>
            <button
              className={style.decreBtn}
              onClick={removeQuantity}
            >
              -
            </button>
            <span className={style.quantityNumber}>Quantity: {quantityProduct}</span>
            <button
              className={style.increBtn}
              onClick={addQuantity}
            >
              +
            </button>
          </div>
          <div
            className={style.addToCart}
            onClick={addProductToCart}
          >
            <BsCartFill className={style.cartIcon} />
            ADD TO CART
          </div>
          <div className={style.wishlistCompareBtns}>
            <div className={style.addToWishlist}>
              <AiFillHeart />
              Add TO WISHLIST
            </div>
          </div>
          {product?.starRating && (
            <div className={style.review}>
              <span>Review: </span>
              <div className={style.stars}>
                {numToStars(product?.starRating)} 
                <span style={{marignLeft:"4px",fontWeight:"normal",fontSize:"18px"}}>(14)</span>
              </div>
            </div>
          )}
          <div className={style.images}>
            <img
              src={`http://localhost:3001/images/${product?.firstImg}`}
              alt=""
              className={style.firstphoto}
              onClick={()=>setCuurentImage(pre=>product?.firstImg)}
            />
            <img
              src={`http://localhost:3001/images/${product?.secondImg}`}
              alt=""
              className={style.secondphoto}
              onClick={()=>setCuurentImage(pre=>product?.secondImg)}
            />
          </div>
          <div className={style.additionalInfo}>
            <hr />
            <p>Material and maintenaince</p>
            <hr />
            <p>What is product about</p>
            <hr />
            <p>Help and Contacts</p>
            <hr />
            <p>FAQ</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails