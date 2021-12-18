import { createAsyncThunk,  createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ( ) => {
      const response = await axios.get("https://fakestoreapi.com/products")
      return response.data;
    }
  )


export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data:[],
    status:null,
  },
  reducers: {
  },
  extraReducers:{
    [fetchProducts.fulfilled] : (state , {payload})=>{
        state.data = payload;
        state.status = "success";

    },
    [fetchProducts.pending] : (state)=>{
        state.status = "loading";
    },
    [fetchProducts.rejected] : (state)=>{
        state.status = "failed";
    },
    
  }
})

export default productsSlice.reducer