import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {} || null,
};

export const globalState = createSlice({
  name: "users",
  initialState,
  reducers: {
    onUserState: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { onUserState } = globalState.actions;

export default globalState.reducer;
