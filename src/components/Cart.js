import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcart,desccart,removecart } from '../redux/StoreSlice'
import add from "../assets/add.svg";
import remove from "../assets/remove.svg";
import '../css/Cart.css'
import { useNavigate } from 'react-router-dom'
import dele from "../assets/dele.svg";

const Cart = () => {
const dispatch = useDispatch()
const cart = useSelector(state => state.store)
const navigate = useNavigate();


const handleadd =(data) =>{
  dispatch(addcart(data));
  
}
const handleremove = (data) => {
  dispatch(desccart(data))
}
const handledelete = (data) => {
  dispatch(removecart(data))
 
}

const handlecheckout = (data)=>{
  dispatch(removecart(data))
  const cart = document.getElementById('scart')
  cart.style.visibility = 'hidden'
  const badge = document.getElementById('len')
  badge.style.visibility = 'hidden'
  navigate("/Checkout")

  
  }
  return (
    
   <div>
    {cart.cartitem?.map((data) =>(
    <> <div className="cartcard">
      <img src={data.image} alt="" />
      <h4>{data.title}</h4>
      <p>Price: {data.price}</p>
      <p>Quantity: {data.cardQuantity}</p>
      <p>Total: {parseFloat(data.price)*parseFloat(data.cardQuantity)}</p>
      <button className="btn"  onClick={() => handleadd(data)}><img src={add}/></button>
      <button className="btn"  onClick={() => handleremove(data)}><img src={remove} id="img1"  /></button>
      <button className="dbtn"  onClick={() => handledelete(data)}><img src={dele} id="img1"  /></button>
    </div>  
     </> 

    ))}
  <div>
     <button type="button" className='cbtn' id='Checkout-btn' onClick={(data) =>handlecheckout(data) }>Checkout</button>
     </div>
  </div>
  )
}

export default Cart
