import React, { useState } from 'react'
import{useDispatch} from "react-redux";
import { useNavigate} from "react-router-dom";
import style from "./addressPage.module.css";
import { submitAddress } from '../../redux/addressSlice';
function AddressPage() {
  const [addressData, setAddressData] = useState({});
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleState=(e)=>{
    setAddressData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      };
    });
  }
  // console.log(addressData)
  const handleSubmit = (e) => {
    e.preventDefault();

    // check form is empty if it is empty throw error or if it is fill go ahead
    const isEmpty = Object.values(addressData).some((v) => v === '');
    console.log("isEmpty",isEmpty)
    const isFilled = Object.values(addressData).length < 5;
    console.log("isFilled", isFilled);

    if (isFilled && isEmpty) {
      setError((prev) => true);
      setTimeout(() => {
        setError((prev) => false);
      }, 2500)
      return;
    }
    dispatch(submitAddress(addressData));
    navigate("/checkout")
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h2 className={style.title}>Address and Details</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name='country'
            placeholder='Country...'
            onChange={handleState}
          />
          <input
            type="text"
            name='state'
            placeholder='state....'
            onChange={handleState}

          />
          <input
            type="text"
            name='city'
            placeholder='City....'
            onChange={handleState}
          />
          <input
            type="email"
            name='email'
            placeholder='Email....'
          />
          <input
            type="tel"
            name='phone number'
            placeholder='Phone number'
            // maxLength={10}
            onChange={handleState}
          />
          <button className={style.submitBtn} type='submit'>Submit</button>
        </form>
        {error&& <span className={style.errorMsg}>All field must be filled!</span>}
      </div>
    </div>
  )
}

export default AddressPage