import { createSlice } from '@reduxjs/toolkit';
// import IProducts from '../../interfaces/iproducts'

const slice = createSlice({
  name: 'api',
  initialState: {
    api: [],
  },


  reducers: {
    api(_state, api) : any{ 
      return {
        api:api.payload,
      };
    },
  },
});

export const { api } = slice.actions;

export default slice.reducer;
