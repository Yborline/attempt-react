import TodoItem from '../TodoItem/TodoItem';
import { Ul } from './TodoList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTodo,
  toggleCompleted,
} from '../../../redux/todos/todos-operations';
import { getVisibleSortTodos } from '../../../redux/todos/todos-selectors';
import { ITodos } from 'interfaces/Todo.interface';

function TodoList() {
  const todos : ITodos[] = useSelector(getVisibleSortTodos);


  const dispatch = useDispatch();

  const onDeleteTodo = (id :string) => dispatch(deleteTodo(id));
  const onToggleCompleted = (id:string) => dispatch(toggleCompleted(id));

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
