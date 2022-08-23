import React, { useEffect } from 'react'
import{useDispatch} from 'react-redux'
import { fetchAsyncFeeds } from '../redux/StoreSlice'
import Feedslisting from './Feedslisting'


const CardHome = () => {
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(fetchAsyncFeeds()) 
},[dispatch])

  return (
    <>
    <Feedslisting/>
    </>
  )
}

export default CardHome
