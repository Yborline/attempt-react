import Home from '../../components/Home/Home';

import { useGetTodosQuery, useDeleteTodoMutation } from 'redux/todoSlice';

export default function HomePage() {
  const { data, error, isLoading } = useGetTodosQuery();
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();
  console.log(data);
  return (
    <>
      {' '}
      <ul>
        {data &&
          data.map(todo => (
            <li key={todo.id}>
              {todo.message}
              <button onClick={() => deleteTodo(todo.id)}>
                {isDeleting ? 'Deleting ...' : 'Delete'}
              </button>
            </li>
          ))}
      </ul>
      <Home />
    </>
  );
}
