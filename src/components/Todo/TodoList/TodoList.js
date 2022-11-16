import { useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { Ul } from "./TodoList.styled";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  toggleCompleted,
} from "../../../redux/todos/todos-actions";
import { getVisibleTodos } from "../../../hooks/getVisibleTodos";

function TodoList() {
  const todos = useSelector((state) =>
    getVisibleTodos(state.todos.items, state.todos.filter)
  );

  const dispatch = useDispatch();

  const onDeleteTodo = (id) => dispatch(deleteTodo(id));
  const onToggleCompleted = (id) => dispatch(toggleCompleted(id));

  return (
    <div>
      <Ul>
        {todos.map(({ date, id, message, completed }) => (
          <li key={id}>
            <TodoItem
              id={id}
              onDeleteTodo={() => onDeleteTodo(id)}
              onToggleCompleted={() => onToggleCompleted(id)}
              text={message}
              completed={completed}
              date={date}
            />
          </li>
        ))}
      </Ul>
    </div>
  );
}

// const getVisibleTodos = (allTodos, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   const visible = allTodos.filter((todo) =>
//     todo.message.toLowerCase().includes(normalizedFilter)
//   );
//   return visible;
// };

export default TodoList;
