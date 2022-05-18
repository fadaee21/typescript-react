import React, { FC, FormEvent, useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: FormEvent) => void;
}

export const InputField: FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const refEl = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        refEl.current?.blur();
      }}
    >
      <input
        ref={refEl}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        type="input"
        value={todo}
        placeholder="Enter a task"
        className="input__box"
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};
