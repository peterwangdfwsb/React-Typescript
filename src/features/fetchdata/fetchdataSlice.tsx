import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";

export interface DataState {
  value: any;
}

const initialState: DataState = {
  value: [{ id: "peter" }, { id: "karina" }]
};

export const fetchdataSlice = createSlice({
  name: "fetchdata",
  initialState,
  reducers: {
    changedata: (state) => {
      state.value = [{ id: "tiger" }];
    },
    fetchdatasuccess: (state, { payload }: PayloadAction) => {
      state.value = payload;
    }
  }
});

export const fetchdatatest = (): AppThunk => async (dispatch) => {
  fetch("https://api.github.com/users?per_page=1", { method: "GET" })
    .then((res) => res.json())
    .then((data) => dispatch(fetchdatasuccess(data)));
};

// Action creators are generated for each case reducer function
export const { changedata, fetchdatasuccess } = fetchdataSlice.actions;

export default fetchdataSlice.reducer;
