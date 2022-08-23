import React from "react";
import Header from "./components/Header";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from './components/Home'
import CardHome from './components/CardHome'
import Login from './components/Login'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Protected from "./components/Protected";

function App() {

  return (
  <Provider store={store}>
    <BrowserRouter>
    <Header />
        <Routes>
        <Route path='/'element={<Login/>} />  
        <Route element={<Protected/>}>  
        <Route path='/Home' element={<Home/>} />
        <Route path='/Card' element={<CardHome/>}/>
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Checkout' element={<Checkout/>} />   
        </Route>     
        </Routes>
    </BrowserRouter>
    </Provider>
    
  )
}

export default App;

