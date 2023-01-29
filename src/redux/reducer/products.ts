import { createSlice } from '@reduxjs/toolkit';
import IProducts from '../../interfaces/IProducts';
// import IProducts from '../../interfaces/iproducts'

const slice = createSlice({
  name: 'checkout',
  initialState: {
    checkout: [],
  },


  reducers: {
    checkout(_state, checkout) : IProducts{ 
      return {
        checkout: checkout.payload,
      };
    },
  },
});

export const { checkout } = slice.actions;

export default slice.reducer;
