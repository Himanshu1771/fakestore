import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Home.css'

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='home' >
        <h1>Welcome to Super</h1>
        <h1>Shop</h1>
        <button className="btn1" onClick={() => navigate("/Card")}>click to proceed </button>
      </div>
    </>
  )
}

export default Home
