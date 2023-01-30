import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ICheckout from '../../interfaces/ICheckout';

const slice = createSlice({
  name: 'checkout',
  initialState: {
    checkout: [] as ICheckout[],
  },


  reducers: {
    checkout(_state, checkout: PayloadAction<ICheckout[]>) { 
      return {
        checkout: checkout.payload,
      };
    },
  },
});

export const { checkout } = slice.actions;

export default slice.reducer;
