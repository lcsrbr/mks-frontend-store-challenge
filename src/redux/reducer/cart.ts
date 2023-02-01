import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'cart',
  initialState: {
    cart: false as boolean,
  },


  reducers: {
    cart(_state, cart:PayloadAction<boolean>){ 
      return {
        cart:cart.payload,
      };
    },
  },
});

export const { cart } = slice.actions;

export default slice.reducer;
