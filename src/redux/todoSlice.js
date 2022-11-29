import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6385fa2a875ca3273d4c20e5.mockapi.io/api/v1/',
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
  }),
});

export const { useGetTodosQuery, useDeleteTodoMutation } = todosApi;
