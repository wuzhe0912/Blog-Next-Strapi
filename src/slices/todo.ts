import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  todos: Array<string>;
}

const initialState: InitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // 1. state => now state
    // 2. action => 執行的動作
    addTodo: (state: { todos: string[] }, action: { payload: string }) => {
      state.todos.push(action.payload);
    },
    addTimesTamp: (state: { todos: string[] }) => {
      state.todos.push(Date.now().toString());
    },
  },
});

export const { addTodo, addTimesTamp } = todoSlice.actions;
export default todoSlice.reducer;
