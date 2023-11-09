
import { createSlice } from "@reduxjs/toolkit";

export const selectSlice = createSlice({
	name: 'selectedoption',
	initialState: {
	  select: {},
	},
	reducers: {
	  infoSelection: (state, action) => {
		state.select = action.payload;
	  },
	},
  });
  
  export const { infoSelection } = selectSlice.actions;
  export default selectSlice.reducer;
  