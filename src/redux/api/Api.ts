import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://taskpractise-server.onrender.com' }), 
    tagTypes:['todo'],
    endpoints: (builder) => ({
      getTodos: builder.query({
        query: (priority) => ({
          url: `/tasks?priority=${priority}`,   // receive both data and filter with priority
          method: 'GET',
        }),
        providesTags:['todo'],
      }),
      
      addTodos: builder.mutation({
        query: (data) => ({
          url: '/task',   // this hits `/tasks`
          method: 'POST',
          body:data,
        }),
        invalidatesTags:['todo']
      }),
      updateTodos: builder.mutation({
        query: (options) => ({
          url: `/task/${options.id}`,   // dynamically getting the toggle options
          method: 'PUT',
          body:options.data,
        }),
        invalidatesTags:['todo']
      }),
    }),
  });

  export const {useGetTodosQuery,useAddTodosMutation,useUpdateTodosMutation}=baseApi;