import React from 'react'
import style from "./create.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from 'react';

function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [firstImg, setFirstImg] = useState("");
  const [secondImg, setSecondImg] = useState("");
  const [price, setPrice] = useState(0);
  const [stars, setStars] = useState(1);
  const onChangefileFirst = (e) => {
    setFirstImg(e.target.files[0])
  };
  const onChangefileSecond = (e) => {
    setSecondImg(e.target.files[0])
 }
  const handleCreateProduct = (e) => {
    e.preventDefault();
    console.log(title,description,price,stars);
    
  }
  const handleCloseImg = (numberImage) => {
    if (numberImage==="first") {
      setFirstImg(pre => "");
    }
    else {
      setSecondImg(pre => "");
    }
  }
  // console.log(title,description,firstImg,secondImg,price,stars)
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h2 className={style.title}>Create Product</h2>
        <form onSubmit={handleCreateProduct}
          encType='multipart/form-data'
        >
          <div className={style.inputWrapper}>
            <label >Title:</label>
            <input
              type="text"
              name='title'
              value={title}
              onChange={(e) => setTitle(pre=>e.target.value)}
              className={style.input}
              placeholder='title....'
            />
          </div>
          <div className={style.inputWrapper}>
            <label >Description:</label>
            <input
              type="text"
              name='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={style.input}
              placeholder='description....'
            />
          </div>
          <div className={style.inputWrapperImgFirst}>
            <label className={style.labelFileInput} htmlFor='firstImg'>
              First Image: <span>Upload here</span>
            </label>
            <input
              type="file"
              name='firstImg'
              id='firstImg'
              // value={firstImg}
              onChange={onChangefileFirst}
              className={style.input}
              placeholder='firstImg....'
              style={{display:"none"}}
            />
            {firstImg &&
              <p className={style.imageName}>
                {firstImg.name}
                <AiOutlineCloseCircle
                  onClick={() => handleCloseImg("first")}
                  className={style.closeIcons}
                />
              </p>
            }
          </div>
          <div className={style.inputWrapperImgSecond}>
            <label className={style.labelFileInput} htmlFor='secondImg'>
              Second Image: <span>Upload here</span>
            </label>
            <input
              type="file"
              name='secondImg'
              id='secondImg'
              // value={secondImg}
              onChange={onChangefileSecond}
              className={style.input}
              placeholder='secondImg....'
              style={{display:"none"}}
            />
            {secondImg &&
              <p className={style.imageName}>
                {secondImg.name}
                <AiOutlineCloseCircle
                  onClick={() => handleCloseImg("second")}
                  className={style.closeIcons}
                />
              </p>
            }
          </div>
          <div className={style.inputWrapper}>
            <label >Price:</label>
            <input
              type="price"
              name='price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={style.input}
              placeholder='price....'
            />
          </div>
          <div className={style.inputWrapper}>
            <label >Stars:</label>
            <input
              min={1}
              max={5}
              step={1}
              type="number"
              name='starRating'
              value={stars}
              onChange={(e) => setStars(e.target.value)}
              className={style.input}
              placeholder='stars....'
            />
          </div>
          <div className={style.buttonWrapper}>
            <button className={style.submitBtn}>
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create