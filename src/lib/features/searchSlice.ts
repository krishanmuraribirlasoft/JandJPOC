import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "search",
  initialState: {
    searchClicked: false,
  },
  reducers: {
    setSearchClickTrue: (state, action) => {
      //   console.log("in search slice", state, action);
      state.searchClicked = action.payload;
    },
  },
});

export const { setSearchClickTrue } = userSlice.actions;

export default userSlice.reducer;
