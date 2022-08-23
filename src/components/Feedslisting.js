import React from 'react'
import { useSelector } from 'react-redux'
import { getallfeeds } from '../redux/StoreSlice'
import Card  from './Card'


const Feedslisting = () => {


  const store = useSelector(getallfeeds)
   console.log(store)

  let renderStore = "";

  renderStore = store.length > 0 ? (
    store.map((store)=>(
      <Card data={store}/>
    ))
  ): (<div className = "error"><h3>{store.Error
}</h3></div >)


return (
 
      <div className='container'> {renderStore}</div>
)
}

export default Feedslisting