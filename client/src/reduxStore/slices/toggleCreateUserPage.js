
import { createSlice } from "@reduxjs/toolkit";

export const toggleUserSlice = createSlice({
	name: 'toggleCreateUser',
	initialState: {
		userCreatePage: false,
	},
	reducers: {
	  infoUserCreatePage: (state, action) => {
		state.userCreatePage = action.payload;
	  },
	},
  });
  
  export const { infoUserCreatePage } = toggleUserSlice.actions;
  export default toggleUserSlice.reducer;
  