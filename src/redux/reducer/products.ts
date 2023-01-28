import { createSlice } from '@reduxjs/toolkit';
// import IProducts from '../../interfaces/iproducts'

const slice = createSlice({
  name: 'checkout',
  initialState: {
    checkout: [],
  },


  reducers: {
    checkout(state, checkout) : any{ 
      return {
        checkout: [checkout.payload, ...state.checkout ]
      };
    },
  },
});

//   reducers: {
//     checkout(state, checkout) {
//       return {
//         ...state,
//         checkout: checkout.payload,
//       };
//     },
//   },
// });

export const { checkout } = slice.actions;

export default slice.reducer;
