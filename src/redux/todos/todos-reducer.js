import { combineReducers } from "redux";
// import { ADD, CHANGE_FILTER, DELETE } from "./todos-types";
import { createReducer } from "@reduxjs/toolkit";
import {
  addTodo,
  deleteTodo,
  changeFilter,
  toggleCompleted,
} from "./todos-actions";

const items = createReducer([], {
  [addTodo]: (state, { payload }) => [payload, ...state],
  [deleteTodo]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [toggleCompleted]: (state, { payload }) =>
    state.map((todo) =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo
    ),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
