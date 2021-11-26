import "./login.css";
import { useContext, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from "react-router";

export default function Login(){

  const userRef = useRef();
  const passwordRef = useRef();
  const [isFetching, setIsFetching] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async(event)=>{
    console.log('Submitted');
    event.preventDefault();
    try{
      setIsFetching(true);
      const res = await axios.post("http://localhost:8080/api/login",{
        username: userRef.current.value,
        password: passwordRef.current.value
      });
      setIsFetching(false);
      console.log(res.data.username);
      if(res.data.username==='null') setLoginError(true);
      else window.location="/dashboard";
    } catch{
      
      console.log("There is an error!");
    }
  }

  return(
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
        className="loginInput" 
        type="text" 
        placeholder="Enter your username..." 
        ref={userRef}
        />
        <label>Password</label>
        <input 
        className="loginInput" 
        type="password" 
        placeholder="Enter your password..." 
        ref={passwordRef}
        />
        {loginError && <p className="loginWarning">*Wrong credentials!</p>}
        <button className="loginButton" type="submit" >
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">Register</Link>
      </button>
    </div>
  )
}