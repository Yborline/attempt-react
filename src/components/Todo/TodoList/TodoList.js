import TodoItem from "../TodoItem/TodoItem";
import { Ul } from "./TodoList.styled";

function TodoList({ todos, onToggleCompleted, onDeleteTodo }) {
  return (
    <div>
      <Ul>
        {todos.map(({ dateNow, date, id, message, completed }) => (
          <li key={id}>
            <TodoItem
              dateNow={dateNow}
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
export default TodoList;
