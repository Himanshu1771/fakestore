import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

 export const fetchAsyncFeeds = createAsyncThunk('store/fetchAsyncFeeds', async () => {
  const response = await axios.get("https://fakestoreapi.com/products")
  return response.data;
})


 export const StoreSlice = createSlice({
  name: 'store',
  initialState:{
    user:null,
    store: {},
    cartitem:[]
  },
  reducers: {
    login:(state,action) =>{
      state.user = action.payload;
    },

    logout:(state) =>{
      state.user = null
    },

    addcart(state,actions){
      const itemIndex = state.cartitem.findIndex((item) => item.id === actions.payload.id);
      if (itemIndex >= 0) 
      {
        state.cartitem[itemIndex].cardQuantity += 1;
      } else {
      const tempProduct = {...actions.payload,cardQuantity:1}  
      state.cartitem.push(tempProduct);
     } },

     desccart(state,actions){
      const itemIndex = state.cartitem.findIndex((item) => item.id === actions.payload.id);
      if (state.cartitem[itemIndex].cardQuantity > 1) {
        state.cartitem[itemIndex].cardQuantity -= 1;
      } else if
        (state.cartitem[itemIndex].cardQuantity === 1){
          const items = state.cartitem.filter(cartitem => cartitem.id !== actions.payload.id);
          state.cartitem = items
     } },
 
    removecart(state,actions) {
      const items = state.cartitem.filter(cartitem => cartitem.id !== actions.payload.id);
      state.cartitem = items
    },
    
    getquantity(state)
   {
    const {quantity} =  state.cartitem.reduce((carttotal,cartitem)=>{
      const {cardQuantity} = cartitem;
      carttotal.quantity += cardQuantity;
      return carttotal
    },
    {
      quantity : 0
    
  })
  state.carttotalQuantity = quantity;
   }
    
  },

  extraReducers:{

    [fetchAsyncFeeds.pending]:() =>{
      console.log("pending");
    },
    [fetchAsyncFeeds.fulfilled]:(state,{payload}) =>{
      console.log("fulfilled");
      return {...state,store:payload}
    },
    [fetchAsyncFeeds.rejected]:() =>{
      console.log("rejected");

    },
  }
})


export const {login,logout,addcart,desccart,removecart,getquantity} = StoreSlice.actions;

export const getallfeeds = (state) => state.store.store

export const selectUser = (state) => state.store.user

export default StoreSlice.reducer