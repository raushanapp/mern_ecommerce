import React from 'react'
import style from "./footer.module.css";
import {AiOutlineInstagram,AiOutlineFacebook,AiOutlineTwitter} from "react-icons/ai"
function Footer() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.column}>
          <h2>FAQ</h2>
          <span>What we sell</span>
          <span>How can you order</span>
          <span>What currency we accept</span>
          <span>Privacy policy</span>
        </div>
        <div className={style.column}>
          <h2>About</h2>
          <p className={style.aboutParagraph}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae magnam molestias dolorem praesentium itaque rem, iste,
            distinctio, voluptate doloribus corporis omnis facere dolores
            reiciendis! Debitis maxime necessitatibus assumenda molestiae ex.
          </p>
        </div>
        <div className={style.column}>
          <h2>Contact</h2>
          <div className={style.icons}>
            <AiOutlineInstagram />
            <AiOutlineFacebook />
            <AiOutlineTwitter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer