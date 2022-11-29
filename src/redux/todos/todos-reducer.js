import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter, sortFilter } from './todos-actions';
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  toggleCompleted,
} from './todos-operations';

const items = createReducer([], {
  [addTodo.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteTodo.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [toggleCompleted.fulfilled]: (state, { payload }) =>
    state.map(todo => (todo.id === payload.id ? payload : todo)),
  [fetchTodos.fulfilled]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [addTodo.pending]: () => true,
  [addTodo.fulfilled]: () => false,
  [addTodo.rejected]: () => false,
  [deleteTodo.pending]: () => true,
  [deleteTodo.rejected]: () => false,
  [deleteTodo.fulfilled]: () => false,
  [toggleCompleted.pending]: () => true,
  [toggleCompleted.rejected]: () => false,
  [toggleCompleted.fulfilled]: () => false,
  [fetchTodos.pending]: () => true,
  [fetchTodos.rejected]: () => false,
  [fetchTodos.fulfilled]: () => false,
});

const error = createReducer(null, {
  [addTodo.rejected]: (_, { payload }) => payload,
  [addTodo.pending]: (_, { payload }) => null,
  [deleteTodo.rejected]: (_, { payload }) => payload,
  [deleteTodo.pending]: (_, { payload }) => null,
  [toggleCompleted.rejected]: (_, { payload }) => payload,
  [toggleCompleted.pending]: (_, { payload }) => null,
  [fetchTodos.rejected]: (_, { payload }) => payload,
  [fetchTodos.pending]: (_, { payload }) => null,
});

const filter = createReducer(
  { filterTitle: '', filterSort: '' },
  {
    [changeFilter]: (state, { payload }) => ({
      ...state,
      filterTitle: payload,
    }),
    [sortFilter]: (state, { payload }) => ({
      ...state,
      filterSort: payload,
    }),
  },
);

export default combineReducers({
  items,
  filter,
  loading,
  error,
});

// const todosSlice = createSlice({
//   name: 'todos',
//   initialState: { items: [], filter: '', isLoading: false, error: null },
//   extraReducers: {
//     [fetchTodos.fulfilled]: (state, action) => {
//       return {
//         ...state,
//         items: action.payload,
//       };
//     },
//   },
// });
