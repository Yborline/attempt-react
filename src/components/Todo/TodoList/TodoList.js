import { useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { Ul } from "./TodoList.styled";
import { connect } from "react-redux";
import { deleteTodo } from "../../../redux/todos/todos-actions";

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

const getVisibleTodos = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();
  const visible = allTodos.filter((todo) =>
    todo.message.toLowerCase().includes(normalizedFilter)
  );
  return visible;
};

const mapStateToProps = ({ todos: { items, filter } }) => ({
  todos: getVisibleTodos(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteTodo: (id) => dispatch(deleteTodo(id)),
  onToggleCompleted: () => null,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
