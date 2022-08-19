import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../models";

const initialState: Todo[] = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addThings: {
      reducer: (state, action: PayloadAction<Todo>): void => {
        state.push(action.payload);
      },
      prepare: (description: string) => ({
        payload: {
          id: Date.now(),
          description,
          completed: false,
        } as Todo,
      }),
    },
    doneThings: (state, action) => {
      const idItem = state.find((todo: Todo) => todo.id === action.payload);
      // ! it doesn't accept without conditional because idItem could be "undefined"
      idItem && (idItem.completed = !idItem.completed);
    },
    removeThings: (state, action) => {
      // ! A common mistake is to try assigning state = someValue directly.
      // !   This will not work!
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addThings, doneThings, removeThings } = todoSlice.actions;

export default todoSlice.reducer;

// * export const selectTodo = (state: RootState) => state.todo;
