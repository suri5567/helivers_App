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
			return {

				...state,
				cartItems: [...state.cartItems, action.payload],
				counter: state.counter + 1

			}
		},
		deleteCartItem: (state, action) => {
			const updatedCartItems = state.cartItems.filter(item => item._id !== action.payload);
			return {
				...state,
				cartItems: updatedCartItems,
				counter: (state.counter > 0) ? state.counter - 1 : 0,
			};
		}

	},
});

export const { addCartItems, deleteCartItem, updateCounter, counterDecrement } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;