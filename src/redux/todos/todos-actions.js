import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction("todos/add", ({ message, date }) => ({
  payload: {
    message,
    date,
    // timeLeft: attempt(finalDate),
    id: nanoid(),
    completed: false,
  },
}));

export const deleteTodo = createAction("todos/delete");

export const changeFilter = createAction("todos/changeFilter");

export const toggleCompleted = createAction("todos/tpggleCompleted");
