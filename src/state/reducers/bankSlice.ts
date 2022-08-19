import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {value: number;}

const initialState: initialStateType = {value: 0,};

const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    deposit: (state) => {state.value += 1;},
    withdraw: (state) => {state.value -= 1;},
    bankrupt: (state, action: PayloadAction<number>) => {
      state.value += action.payload;},},});

export const { deposit, withdraw, bankrupt } = bankSlice.actions;

export default bankSlice.reducer;
