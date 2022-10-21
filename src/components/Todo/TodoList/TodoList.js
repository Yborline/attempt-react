import { useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { Ul } from "./TodoList.styled";

function TodoList({ todos, onToggleCompleted, onDeleteTodo }) {

  // useEffect(() => {
  //   attempt()

  // }, []);

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
export default TodoList;
