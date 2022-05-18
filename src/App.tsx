import React, { FC, FormEvent, useState } from "react";
import "./App.css";
import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";
import { Todo } from "./model";

const App: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
      console.log(todos);
    }
  };

  return (
    <div className="App">
      <span className="heading">taskify</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={(e) => handleAdd(e)}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
