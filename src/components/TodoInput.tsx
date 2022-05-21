import React, { useState } from "react";
import { useAppDispatch } from "../state/hooks";
import { addThings } from "../state/reducers/todoSlice";

export const TodoInput: () => JSX.Element = () => {
  interface IStateType {
    input: string;
    // setInput: React.Dispatch<React.SetStateAction<string>>;
  }
  // ! you can not define the setInput type here
  const [input, setInput] = useState<IStateType["input"]>("");
  const dispatch = useAppDispatch();
  return (
    <div>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      <button onClick={() => dispatch(addThings(input))}>add</button>
    </div>
  );
};
