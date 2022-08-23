import React , { useEffect, useRef } from 'react'
import logo from "../assets/logo.svg";
import "../css/Header.css";
import { Link } from "react-router-dom"
import cart from '../assets/cart.svg';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout,getquantity } from '../redux/StoreSlice'
import { useDispatch } from "react-redux";

const Header = () => {
const cartref = useRef(null)
const scartref = useRef(null)
const logref = useRef(null)

  const {carttotalQuantity} = useSelector(state => state.store)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getquantity())
  })

  
  const handlelogout = (e) => {
    e.preventDefault();
    dispatch(logout());

   cartref.current.style.visibility = 'hidden'
   scartref.current.style.visibility = 'hidden'
   logref.current.style.visibility = 'hidden'
  }

  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" />
        <Link to={'./Home'} className="Brand" fill="white">Supershop</Link>
        <button className="logout" id="out" ref ={logref} onClick={(e) => handlelogout(e)}>Logout</button>
        <><img src={cart} className='cart' ref ={scartref} id="scart" onClick={() => navigate("/Cart")} /><h5 id="len" ref ={cartref}>{carttotalQuantity} </h5></>
      </nav>
    </>
  );
};

export default Header;
