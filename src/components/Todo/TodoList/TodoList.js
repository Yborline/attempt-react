import TodoItem from '../TodoItem/TodoItem';
import { Ul } from './TodoList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTodo,
  toggleCompleted,
} from '../../../redux/todos/todos-operations';
import { getVisibleSortTodos } from '../../../redux/todos/todos-selectors';

function TodoList() {
  const todos = useSelector(getVisibleSortTodos);

  const dispatch = useDispatch();

  const onDeleteTodo = id => dispatch(deleteTodo(id));
  const onToggleCompleted = id => dispatch(toggleCompleted(id));

  return (
    <Ul>
      {todos.map(({ date, id, message, completed }) => (
        <TodoItem
          key={id}
          onDeleteTodo={() => onDeleteTodo(id)}
          onToggleCompleted={() =>
            onToggleCompleted({ id, completed: !completed })
          }
          text={message}
          completed={completed}
          date={date}
        />
      ))}
    </Ul>
  );
}

export default TodoList;
