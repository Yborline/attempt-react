import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63872bd6d9b24b1be3e82732.mockapi.io/',
  }),
  tagTypes: ['Todo'],
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => ({
        url: `/todos`,
        method: 'GET',
      }),
      providesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation({
      query: todoId => ({
        url: `/todos/${todoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
    createTodo: builder.mutation({
      query: newTodo => ({
        url: '/todos',
        method: 'POST',
        body: {
          message: newTodo,
          complated: false,
        },
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useDeleteTodoMutation,
  useCreateTodoMutation,
} = todosApi;
