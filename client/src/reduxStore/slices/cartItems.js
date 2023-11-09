
import { createSlice } from '@reduxjs/toolkit';





const initialState = {
  cartItems: [],
  counter: 0,
};

export const cartItemsSlice = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {
    addCartItems: (state, action) => {
      state.cartItems = action.payload;

    
    },
    deleteCartItem: (state, action) => {
      state.cartItems = action.payload;
    },
    updateCounter: (state, action) => {
      state.counter = action.payload;
    },
	counterDecrement:(state, action)=>{
		state.counter = action.payload
	}
  },
});

export const { addCartItems, deleteCartItem, updateCounter, counterDecrement } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
