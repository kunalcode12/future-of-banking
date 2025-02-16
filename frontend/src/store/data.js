import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  value: null,
  totalAsset: null,
};

export const authSlice = createSlice({
  name: "data",
  initialState: initialAuthState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setTotalAsset: (state, action) => {
      state.totalAsset = action.payload;
    },
  },
});

export const { setValue, setTotalAsset } = authSlice.actions;

export default authSlice.reducer;
