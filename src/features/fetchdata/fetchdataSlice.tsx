import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DataState {
  value: string;
}

const initialState: DataState = {
  value: "abc"
};

export const fetchdataSlice = createSlice({
  name: "fetchdata",
  initialState,
  reducers: {}
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default fetchdataSlice.reducer;
