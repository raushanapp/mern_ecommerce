import React from 'react'
import style from "./register.module.css";
import {Link, useNavigate} from "react-router-dom"
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { register } from '../../redux/authSlice';
function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (confirmPassword !== password) throw new Error("password are not the same");
      const resp = await fetch(`http://localhost:3001/auth/users/register`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          password
        })
      });
      if (resp.status === 404 || resp.status === 500) {
        throw new Error("Wrong credentials");
      };
      const data = await resp.json();
      dispatch(register(data));  // {others token}
      navigate("/");
      console.log(data);
    } catch (error) {
      setError(pre => true);
      setTimeout(() => {
        setError(pre => false);
      }, 2500);
      console.error(error.message);
    }
  }
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h2 className={style.title}>Register</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="username">
            <input
              type="text"
              id='username'
              placeholder='Enter username'
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              id='email'
              placeholder='Enter email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              id='password'
              placeholder='Enter password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </label>
          <label htmlFor="confirmPassword">
            <input
              type="password"
              id='confirmPassword'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />
          </label>
          <button className={style.submitBtn}>Register</button>
          <Link to='/login' >Already have an account? <p className={style.login}>Loin now</p></Link>
        </form>
        {error &&
          <div className={style.errorMessage}>
            Wrong Credentails! Try different ones.
          </div>
        }
      </div>
    </div>
  )
}

export default Register