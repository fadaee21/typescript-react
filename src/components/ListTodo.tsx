import React from "react";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { Todo } from "../models";
import { doneThings, removeThings } from "../state/reducers/todoSlice";

export const ListTodo = () => {
  const todoArr = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  return (
    <ul>
      {todoArr.map((item: Todo) => {
        return !item.completed ? (
          <li key={item.id}>
            {item.description}
            <button onClick={() => dispatch(doneThings(item.id))}>DONE</button>
            <button onClick={() => dispatch(removeThings(item.id))}>
              Remove
            </button>
          </li>
        ) : (
          <li key={item.id}>
            <s>{item.description}</s>
            <button onClick={() => dispatch(doneThings(item.id))}>DONE</button>
            <button onClick={() => dispatch(removeThings(item.id))}>
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};
