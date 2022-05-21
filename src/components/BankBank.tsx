import React from "react";
import { bankrupt, deposit, withdraw } from "../state/reducers/bankSlice";
import { RootState } from "../state/store";
import { useAppSelector, useAppDispatch } from "../state/hooks";

const BankBank: () => JSX.Element = () => {
  const { value } = useAppSelector((e: RootState) => e.bank);

  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>VALUE: {value}</h1>
      <button
        onClick={() => {
          dispatch(deposit());
        }}
      >
        DEPOSIT
      </button>
      <button
        onClick={() => {
          dispatch(withdraw());
        }}
      >
        WITHDRAw
      </button>
      <button
        onClick={() => {
          dispatch(bankrupt(5));
        }}
      >
        bankrupt
      </button>
    </div>
  );
};

export default BankBank;
