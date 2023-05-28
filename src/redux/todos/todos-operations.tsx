import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IToggleComplete,ITodos,IAddtodo } from '../../interfaces/Todo.interface'

axios.defaults.baseURL = 'https://63872bd6d9b24b1be3e82732.mockapi.io/';

type FetchTodosError = {
  message: string ;
};


type TRejectValue = (message: FetchTodosError) => void;

const rejectHandler = (error :unknown ,rejectValue :TRejectValue) => {
  let message :string
  if (error instanceof Error) 
  {message = error.message}
  else {
     message = String(error)
  }
  return rejectValue({message})
   
}


// const rejectHandler = (error :Error , rejectValue: TRejectValue) => {
//   let message :string
//   if (error instanceof Error) {message = error.message}
//   else{ message = String(error)}
//     return rejectValue({ message });
// }


export const fetchTodos = createAsyncThunk<ITodos[] , any, { rejectValue: FetchTodosError }>(
  'todos/fetchTodo',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/todos');
      return data;
    } catch (error ) {


      return  rejectHandler(error,rejectWithValue)


    }
  },
);

export const addTodo = createAsyncThunk<ITodos , IAddtodo, { rejectValue: FetchTodosError }>(
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
    } catch (error:any) {

      return  rejectHandler(error,rejectWithValue)

    }
  },
);



export const deleteTodo= createAsyncThunk<string, string ,  { rejectValue: FetchTodosError } >(
  'todos/deleteTodo',
  async (id , { rejectWithValue }) => {
    try {
      await axios.delete(`todos/${id}`);
      return id ;
    } catch (error:any) {
  let message
  if (error instanceof Error) message = error.message
  else message = String(error)
          return rejectWithValue({ message });
      // return  rejectHandler(error,rejectWithValue)
  
    }
  },
);

export const toggleCompleted = createAsyncThunk<ITodos, IToggleComplete ,  { rejectValue: FetchTodosError } >(
  'todos/toggleCompleted',
  async ({ id, completed }, { rejectWithValue }) => {
    const update = { completed };
    try {
      const { data }  = await axios.put(`todos/${id}`, update);
      return data;
    } catch (error: any) {
            return  rejectHandler(error,rejectWithValue)

    }
  },
);
