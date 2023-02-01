import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IProducts from '../../interfaces/IProducts';

const slice = createSlice({
  name: 'checkout',
  initialState: {
    checkout: [] as IProducts[],
  },

  reducers: {
    checkout(_state, checkout: PayloadAction<IProducts[]>) {
      const organizedState = [...checkout.payload];
      organizedState.sort((a, b) => {
        return a.id - b.id;
      });
      return {
        checkout: organizedState,
      };
    },
  },
});

export const { checkout } = slice.actions;

export default slice.reducer;
