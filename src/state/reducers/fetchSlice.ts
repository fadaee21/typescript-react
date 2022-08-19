import { createSlice } from "@reduxjs/toolkit";
import { dataFetchKon } from "../apiRequest";
import { fetchDataType } from "../../models";

const initialState: fetchDataType = {
  id: 3,
  isLoading: true,
  fetchItems: [],
};

const fetchSlice = createSlice({
  name: "fetchKon",
  initialState,
  reducers: {
    fetch: (state, action: { payload: number }) => {
      state.id = action.payload;
      console.log(action.payload);
    },
  },
  // ! you must must must use builder for typeScript
  extraReducers: (builder) => {
    builder.addCase(dataFetchKon.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(dataFetchKon.fulfilled, (state, action) => {
      state.isLoading = false;
      state.fetchItems = action.payload;
    });
    builder.addCase(dataFetchKon.rejected, (state, action) => {
      console.log(action);
      state.isLoading = false;
    });
  },
});

export const { fetch } = fetchSlice.actions;
export default fetchSlice.reducer;
