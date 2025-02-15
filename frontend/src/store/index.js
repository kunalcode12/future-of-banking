import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./data";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
