import React, { useState } from 'react'
import style from "./login.module.css";
import {Link, useNavigate} from "react-router-dom"
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      let resp = await fetch(`http://localhost:3001/auth/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
      if (resp.status === 500) {
        throw new Error("Wrong credentials")
        // return;
      };
      const data = await resp.json();
      console.log(data);
      navigate("/");
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
        <h2 className={style.title}>Login</h2>
        <form onSubmit={handleLogin} >
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
          <button className={style.submitBtn}>Login</button>
          <Link to='/register'>
            Don't have an account? <p className={style.register}>Register Now!</p>
          </Link>
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

export default Login