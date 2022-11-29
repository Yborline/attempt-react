import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://6385fa2a875ca3273d4c20e5.mockapi.io/api/v1';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodo',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/todos');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async ({ message, date }, { rejectWithValue }) => {
    const todo = {
      message,
      date,
      completed: false,
      dateNow: new Date().getTime(),
    };
    try {
      const { data } = await axios.post('/todos', todo);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`todos/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const toggleCompleted = createAsyncThunk(
  'todos/toggleCompleted',
  async ({ id, completed }, rejectWithValue) => {
    const update = { completed };
    try {
      const { data } = await axios.patch(`todos/${id}`, update);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
