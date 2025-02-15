import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  value: null,
};

export const authSlice = createSlice({
  name: "data",
  initialState: initialAuthState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = authSlice.actions;

export default authSlice.reducer;
