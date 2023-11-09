
import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
	name: 'search',
	initialState: {
	  searchTerm: "",
	},
	reducers: {
	  infoSearchTerm: (state, action) => {
		state.searchTerm = action.payload;
	  },
	},
  });
  
  export const { infoSearchTerm } = searchSlice.actions;
  export default searchSlice.reducer;
  