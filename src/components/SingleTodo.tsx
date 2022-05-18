import React, { useEffect, useRef, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";
interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    const doneItem: Todo[] = todos.map((item) =>
      item.id === id ? { ...todo, isDone: !item.isDone } : item
    );
    setTodos(doneItem);
  };
  const handleDelete = (id: number) => {
    const deleteItem: Todo[] = todos.filter((item) => item.id !== id);
    setTodos(deleteItem);
  };
  const refEl2 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    refEl2.current?.focus();
  }, [edit])
  
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    const editedItem = todos.map((todo) => {
      return todo.id === id ? { ...todo, todo: editTodo } : todo;
    });
    setTodos(editedItem);
    setEdit(false);
  };
  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos_single--test"
          ref={refEl2}
        />
      ) : todo.isDone ? (
        <s className="todos__single--Text">{todo.todo}</s>
      ) : (
        <span className="todos__single--Text">{todo.todo}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
              
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
              
            
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};
