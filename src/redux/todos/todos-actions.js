// import { nanoid } from "nanoid";
import { createAction } from '@reduxjs/toolkit';

// export const addTodo = createAction("todos/add", ({ message, date }) => ({
//   payload: {
//     message,
//     date,
//     // timeLeft: attempt(finalDate),
//     id: nanoid(),
//     completed: false,
//   },
// }));

export const fetchTodoRequest = createAction('totos/fetchTodoRequest');
export const fetchTodoSuccess = createAction('todos/fetchTodoSuccess');
export const fetchTodoError = createAction('todos/fetchTodoError');

export const addTodoRequest = createAction('totos/addTodoRequest');
export const addTodoSuccess = createAction('todos/addTodoSuccess');
export const addTodoError = createAction('todos/addTodoError');

export const deleteTodoRequest = createAction('totos/deleteTodoRequest');
export const deleteTodoSuccess = createAction('todos/deleteTodoSuccess');
export const deleteTodoError = createAction('todos/deleteTodoError');

export const toggleCompletedRequest = createAction(
  'totos/toggleCompletedRequest',
);
export const toggleCompletedSuccess = createAction(
  'todos/toggleCompletedSuccess',
);
export const toggleCompletedError = createAction(
  'todos/toggleCompletedError',
);

// export const deleteTodo = createAction("todos/delete");

export const changeFilter = createAction('todos/changeFilter');

export const sortFilter = createAction('todos/sortFilter');

export const toggleCompleted = createAction('todos/toggleCompleted');
