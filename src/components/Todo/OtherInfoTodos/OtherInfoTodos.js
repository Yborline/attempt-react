import { useSelector } from 'react-redux';
import { getTodos } from 'redux/todos/todos-selectors';

const OtherInfoTodos = () => {
  const todos = useSelector(getTodos);

  const totalTodoCaunt = todos => {
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  return (
    <>
      <p>Amount todo {todos.length}</p>
      <p>Number of completed {totalTodoCaunt(todos)}</p>
    </>
  );
};

export default OtherInfoTodos;
