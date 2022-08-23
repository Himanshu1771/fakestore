import React, { useState } from "react";
import '../css/Login.css'
import { useDispatch } from "react-redux";
import { login } from '../redux/StoreSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

   if(email==null){
    alert('Enter the correct Email')
    }
    else if(password == null){
      alert('Enter the correct Password')
     }
     else{
    dispatch(login({
      email,
      password,
      loggedIn: true,
    }))
    document.getElementById('out').style.visibility = 'visible'
  }
    navigate('/Home') 
     
  }
  return (
    <div>
      <h2>Login Page</h2>
      <div className="login">
        <form id="login" method="get" action="login.php" >
          <label>
            <b>UserName</b>
          </label>
          <br />
          <input type="email" name="email" id="Uname" placeholder="email"  value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <label>
            <b>Password</b>
          </label>
          <br />
          <input type="Password" name="pass" id="Pass" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button type="submit" id="log" onClick={(e) => handleSubmit(e)}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
