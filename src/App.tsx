import React, { useEffect } from "react";

import "./App.css";
import BankBank from "./components/BankBank";
import { FetchDate } from "./components/FetchDate";
import { ListTodo } from "./components/ListTodo";
import { TodoInput } from "./components/TodoInput";
import { dataFetchKon } from "./state/apiRequest";
import { useAppDispatch, useAppSelector } from "./state/hooks";

function App() {
  const dispatch = useAppDispatch();
  const {id, isLoading} = useAppSelector((e) => e.fetch);

  useEffect(() => {
    dispatch(dataFetchKon(id));
    // eslint-disable-next-line
  }, [id]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <BankBank />
      <TodoInput />
      <ListTodo />
      <FetchDate />
    </div>
  );
}

export default App;
