import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate, Outlet } from 'react-router-dom';
import { selectUser } from '../redux/StoreSlice';


const Protected = () => {

    const user = useSelector(selectUser);

    return <>{user ? <Outlet/> :<Navigate to={'/'}/>}</>
}
export default Protected