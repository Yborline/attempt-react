import { ADD, DELETE, CHANGE_FILTER } from "./todos-types";
import { nanoid } from "nanoid";

export const addTodo = ({ message, date }) => ({
  type: ADD,
  payload: {
    message,
    date,
    // timeLeft: attempt(finalDate),
    id: nanoid(),
    completed: false,
  },
});

export const deleteTodo = (todoId) => ({
  type: DELETE,
  payload: todoId,
});

export const changeFilter = (value) => ({
  type: CHANGE_FILTER,
  payload: value,
});
